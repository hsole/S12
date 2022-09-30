import { RectNode, RectNodeModel, h } from '@logicflow/core'

class TaskModel extends RectNodeModel {
  initNodeData (data) {
    super.initNodeData(data)
    this.width = 100
    this.height = 60
    this.isTaskNode = true // 标识此节点是任务节点，可以被附件边界事件
    this.boundaryEvents = [] // 记录自己附加的边界事件
  }
  getNodeStyle() {
    const style = super.getNodeStyle()
    // isCloseToBoundary属性用于标识拖动边界节点是否靠近此节点
    // 如果靠近，则高亮提示
    const { isCloseToBoundary } = this.properties
    style.fill = 'rgb(255, 230, 204)'
    if (isCloseToBoundary) {
      style.stroke = '#FF0000'
      style.strokeWidth = 2
    } else {
      style.stroke = 'rgb(215, 155, 0)'
      style.strokeWidth = 1
    }
    if (this.isSelected) {
      style.strokeWidth = 2
    }
    return style
  }
  getOutlineStyle() {
    const style = super.getOutlineStyle()
    style.stroke = 'transparent'
    style.hover.stroke = 'transparent'
    return style
  }
  /**
   * 提供方法给插件在判断此节点被拖动边界事件节点靠近时调用，从而触发高亮
   */
  setIsCloseToBoundary (flag) {
    this.setProperty('isCloseToBoundary', flag)
  }
  /**
   * 附加后记录被附加的边界事件节点Id
   */
  addBoundaryEvent (nodeId) {
    if (this.boundaryEvents.find(item => item === nodeId)) {
      return false
    }
    this.boundaryEvents.push(nodeId)
    return true
  }
  /**
   * 被附加的边界事件节点被删除时，移除记录
   */
  deleteBoundaryEvent (nodeId) {
    this.boundaryEvents = this.boundaryEvents.filter(item => item !== nodeId)
  }
}

class Task extends RectNode {
  getShape() {
    const { model } = this.props;
    const style = model.getNodeStyle();
    const { x, y, width, height } = model;
    const outCircle = super.getShape();
    return h(
      'g',
      {},
      outCircle,
      h('rect', {
        ...style,
        x: x - width / 2,
        y: y - height / 2,
        width,
        height,
      }),
    );
  }
}

export default {
  type: 'task-node',
  view: Task,
  model: TaskModel,
}
