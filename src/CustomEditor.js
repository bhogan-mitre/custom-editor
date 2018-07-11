import React, {Component} from 'react';
import {
  GraphCreatePanel,
  StyleLayoutPanel,
  StyleAxesPanel,
  StyleTracesPanel,
  PanelMenuWrapper,
  Radio,
  Info,
  PlotlySection,
  TraceAccordion,
  TransformAccordion,
  DataSelector,
} from 'react-chart-editor';
import FilterOperation from 'react-chart-editor';
import FilterValue from 'react-chart-editor';
import Aggregations from 'react-chart-editor';

export default class CustomEditor extends Component {
  render() {

    return (
      <PanelMenuWrapper>
          <GraphCreatePanel group='Graph' name='Create' />
          <TraceAccordion group='Graph' name='Transforms'>
            <TransformAccordion>
                <Radio
                  attr="enabled"
                  options={[
                    {label: 'Enabled', value: true},
                    {label: 'Disabled', value: false},
                  ]}
                />
                <DataSelector label='By' attr="groups" />

                <DataSelector label='Target' attr="target" />
                <FilterOperation label='Operator' attr="operation" />
                <FilterValue label='Value' attr="value" />
                <PlotlySection name='Aggregations' attr="aggregations">
                    <Aggregations />
                </PlotlySection>
                <Info>helpful text</Info>

            </TransformAccordion>

          </TraceAccordion>

          <StyleTracesPanel group='Style' name='Traces' />
          <StyleLayoutPanel group='Style' name='Layout' />
          <StyleAxesPanel group='Style' name='Axes' />

      </PanelMenuWrapper>
    );
  }
}
