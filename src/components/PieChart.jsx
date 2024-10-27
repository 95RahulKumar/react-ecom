import { measureTextWidth, Pie } from '@ant-design/plots';
import React from 'react'

export const PieChart = ({totalAmmount,Anotationtext,fillColor,changeFmt=false}) => {
  function renderStatistic(containerWidth, text, style) {
  const textWidth = measureTextWidth(text, style);
  const textHeight = style.lineHeight || style.fontSize
  const R = containerWidth / 2;
  let scale = 1;
  if (containerWidth < textWidth) {
    scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
  }
  const textStyleStr = `width:${containerWidth}px;`;
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
}

    const config = {
        data: [
          { type: 'hello', value: +totalAmmount },
        ],
        meta:changeFmt? {
            value: {
              formatter: (v) => `${Math.ceil(v / 1000)}K`
            },
            style:{
                fontSize:'12px'
            }
          }:{
            value: {
                formatter: (v) => v==0?'0':v
              },
          },
          statistic: {
            title: {
              offsetY: 1,
              customHtml: (container, view, datum) => {
                const { width, height } = container.getBoundingClientRect();
                const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                const text = Anotationtext;
                return renderStatistic(d, text, { fontSize: 18 });
              },
            },},
        angleField: 'value',
        startAngle: Math.PI,
        endAngle: 0,
        innerRadius: 0.8,
        tooltip: false,
        legend: false,
        autoFit:true,
        pieStyle: ({ sex }) => {
              return {
                fill:fillColor,
              };
          },
      };    
      
     
  return (
     <Pie {...config} style={{height:'100px',width:'180px',fontSize:'12px'}}/>
  )
}