import { makeAutoObservable } from 'mobx';
import Tool from '../Tools/Tool';

class ToolState {
  tool: Tool | null = null;
  strokeColor = '#000';
  fillColor = '#000';
  lineWidth = 1;

  constructor() {
    makeAutoObservable(this);
  }

  public setTool(tool: Tool) {
    this.tool = tool;
  }

  public setFillColor(color: string) {
    if (this.tool) {
      this.fillColor = color;
      this.tool.fillColor = color;
    }
  }

  public setStrokeColor(color: string) {
    if (this.tool) {
      this.strokeColor = color;
      this.tool.strokeColor = color;
    }
  }

  public setLineWidth(width: number) {
    if (this.tool) {
      this.lineWidth = width;
      this.tool.lineWidth = width;
    }
  }

  get currentToolName() {
    return this.tool?.name;
  }

  get currentFillColor() {
    return this.fillColor;
  }

  get currentStrokeColor() {
    return this.strokeColor;
  }

  get currentLineWidth() {
    return this.lineWidth;
  }
}

export default new ToolState();