import { CurvedEdge, CurvedEdgeModel } from '@logicflow/extension';

class BetterLineModel extends CurvedEdgeModel {
  getEdgeStyle() {
    const style = super.getEdgeStyle()
    const sourceNodeModel = this.graphModel.getNodeModelById(this.sourceNodeId)
    if (sourceNodeModel.properties.color) {
      style.stroke = sourceNodeModel.properties.color
    } else {
      style.stroke = 'rgb(204, 204, 206)'
    }
    return style
  }
}

class BetterLine extends CurvedEdge {
}

export default {
  type: 'better-line',
  view: BetterLine,
  model: BetterLineModel
}