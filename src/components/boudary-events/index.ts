import BoundaryEvent from './boundary-events-node'
import TaskNode from './task-node';

class BoundaryEventPlugin {
  static pluginName = 'boundaryEvents';
  lf: any;
  nodeBoundaryMap: any;
  nodeBoundaryAxisXMap: Map<any, any>;
  nodeBoundaryAxisYMap: Map<any, any>;
  constructor({ lf }) {
    this.lf = lf;
    this.nodeBoundaryMap = new Map()
    lf.register(BoundaryEvent);
    lf.register(TaskNode);
    lf.on('node:drag,node:dnd-drag', this.checkAppendBoundaryEvent);
    lf.on('node:drop,node:dnd-add', this.appendBoundaryEvent);
    lf.graphModel.addNodeMoveRules((model, deltaX, deltaY) => {
      if (model.isTaskNode) { // 如果移动的是分组，那么分组的子节点也跟着移动。
        const nodeIds = model.boundaryEvents;
        lf.graphModel.moveNodes(nodeIds, deltaX, deltaY, true);
        return true;
      }
      return true
    });
  }
  private appendBoundaryEvent = ({ data }) => {
    const preBoundaryNodeId = this.nodeBoundaryMap.get(data.id);
    const closeNodeId = this.checkAppendBoundaryEvent({ data })
    if (closeNodeId) {
      const nodeModel = this.lf.graphModel.getNodeModelById(closeNodeId)
      nodeModel.setIsCloseToBoundary(false)
      nodeModel.addBoundaryEvent(data.id)
      this.nodeBoundaryMap.set(data.id, closeNodeId)
    }
    if (preBoundaryNodeId !== closeNodeId) {
      const preNodeModel = this.lf.graphModel.getNodeModelById(preBoundaryNodeId)
      if (preNodeModel) {
        preNodeModel.deleteBoundaryEvent(data.id)
      }
    }
  }
  // 判断此节点是否在某个节点的边界上
  // 如果在，且这个节点model存在属性isTaskNode，则调用这个方法
  private checkAppendBoundaryEvent = ({ data }) => {
    const { x, y, id, properties } = data;
    if (!properties.isBoundaryEvent) {
      return
    }
    const { nodes } = this.lf.graphModel;
    let closeNodeId = '';
    for (let i = 0; i < nodes.length; i++) {
      const nodeModel = nodes[i];
      if (nodeModel.isTaskNode && nodeModel.id !== id) {
        if (this.isCloseNodeEdge(nodeModel, x, y) && !closeNodeId) { // 同时只允许在一个节点的边界上
          nodeModel.setIsCloseToBoundary(true);
          closeNodeId = nodeModel.id;
        } else {
          nodeModel.setIsCloseToBoundary(false);
        }
      }
    }
    return closeNodeId;
  }
  private isCloseNodeEdge (nodeModel, x, y) {
    if (Math.abs(Math.abs(nodeModel.x - x) - nodeModel.width / 2) < 10 &&
    y >= nodeModel.y - nodeModel.height / 2 - 10 &&
    y <= nodeModel.y + nodeModel.height / 2 + 10) {
      return true
    }
    if (Math.abs(Math.abs(nodeModel.y - y) - nodeModel.height / 2) < 10 &&
    x >= nodeModel.x - nodeModel.width / 2 - 10 &&
    x <= nodeModel.x + nodeModel.width / 2 + 10) {
      return true
    }
    return false
  }
}
export {
  BoundaryEventPlugin,
};