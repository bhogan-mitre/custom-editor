import React, {Component} from 'react';
import {
  GraphCreatePanel,
  StyleLayoutPanel,
  StyleAxesPanel,
  StyleTracesPanel,
  PanelMenuWrapper,
} from 'react-chart-editor';
import GraphTransformsPanel from './CustomGraphTransformsPanel';

export default class CustomEditor extends Component {
  render() {

    return (
      <PanelMenuWrapper>
          <GraphCreatePanel group='Graph' name='Create' />
          <GraphTransformsPanel group='Graph' name='Transforms' />

          <StyleTracesPanel group='Style' name='Traces' />
          <StyleLayoutPanel group='Style' name='Layout' />
          <StyleAxesPanel group='Style' name='Axes' />

      </PanelMenuWrapper>
    );
  }
}
