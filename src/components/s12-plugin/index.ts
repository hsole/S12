import TeamNode from './team-node';
import betterLine from './better-line';
import type { LogicFlow } from '@logicflow/core';
import debounce from 'lodash.debounce';

class S12Plugin {
  static pluginName = 's12';
  lf: LogicFlow;
  constructor({ lf }) {
    this.lf = lf;
    this.lf.register(TeamNode);
    this.lf.register(betterLine);
    this.lf.on('node:dnd-drag', debounce(this.checkAppendBoundaryEvent, 10));
    this.lf.on('node:dnd-add', this.appendBoundaryEvent);

  }
  private appendBoundaryEvent = ({ data }) => {
    const closeNodeId = this.checkAppendBoundaryEvent({ data })
    if (closeNodeId) {
      const nodeModel = this.lf.graphModel.getNodeModelById(closeNodeId)
      nodeModel.setIsCloseToBoundary(false)
      nodeModel.text.value = data.text.value
      nodeModel.setProperties(data.properties)
    }
    this.lf.deleteNode(data.id)
  }
  private checkAppendBoundaryEvent = ({ data }) => {
    const { x, y, id } = data;
    const { nodes } = this.lf.graphModel;
    let closeNodeId = '';
    for (let i = 0; i < nodes.length; i++) {
      const nodeModel = nodes[i];
      if (nodeModel.id !== id && nodeModel.isTeamNode) {
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
    if (Math.abs(nodeModel.x - x) < 30 && Math.abs(nodeModel.y - y) < 10) {
      return true
    }
    return false
  }
}
export {
  S12Plugin,
  TeamNode,
};
