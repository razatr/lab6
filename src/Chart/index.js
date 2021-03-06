import React, { Fragment } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer, VictoryLegend } from 'victory'
import { func, fEuler, secondOrder1, secondOrder2, fourthOrder } from './lab6'

function Chart() {

    return (<Fragment>
        <VictoryChart
            maxDomain={ { x: 1.5, y: -1.5 } }
            minDomain={ { x: -0.5, y: -3.5 } }
            theme={ VictoryTheme.material }
            containerComponent={ <VictoryContainer responsive={ false }/> }
            width={ 800 }
            height={ 800 }>
            <VictoryLegend x={ 200 } y={ 50 }
                           orientation="horizontal"
                           gutter={ 20 }
                           itemsPerRow={3}
                           data={ [
                               {
                                   name: 'Graph of a function',
                                   symbol: { fill: 'd00f50' },
                                   labels: { fill: 'd00f50' }
                               },
                               {
                                 name: 'Euler',
                                 symbol: { fill: '0f46d0' },
                                 labels: { fill: '0f46d0' }
                               },
                               {
                                 name: 'Second order first method',
                                 symbol: { fill: '2cd00f' },
                                 labels: { fill: '2cd00f' }
                               },
                               {
                                 name: 'Second order second method',
                                 symbol: { fill: 'd0bd0f' },
                                 labels: { fill: 'd0bd0f' }
                               },
                               {
                                 name: 'Fourth order',
                                 symbol: { fill: '0fd0c0' },
                                 labels: { fill: '0fd0c0' }
                               }
                           ] }
            />
            <VictoryLine data={ func }
                         animate={ { duration: 1500 } }
                         style={ {
                             data: {
                                 stroke: '#d00f50'
                             }
                         } }/>
            <VictoryLine data={ fEuler }
                         animate={ { duration: 1500 } }
                         style={ {
                           data: {
                             stroke: '#0f46d0'
                           }
                         } }/>
            <VictoryLine data={ secondOrder1 }
                         animate={ { duration: 1500 } }
                         style={ {
                           data: {
                             stroke: '#2cd00f'
                           }
                         } }/>
            <VictoryLine data={ secondOrder2 }
                         animate={ { duration: 1500 } }
                         style={ {
                           data: {
                             stroke: '#d0bd0f'
                           }
                         } }/>
            <VictoryLine data={ fourthOrder }
                         animate={ { duration: 1500 } }
                         style={ {
                           data: {
                             stroke: '#0fd0c0'
                           }
                         } }/>
        </VictoryChart>
    </Fragment>)
}

export default Chart