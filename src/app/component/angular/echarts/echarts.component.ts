import { Component, OnInit } from '@angular/core';
import { zoom } from '../../../animate/animate';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.less'],
  animations: [ zoom ]
})
export class EchartsComponent implements OnInit {
  pipInstance: any;
  pipOption: Object;
  globeOption: Object;
  globeView: boolean;
  barOption: Object;

  constructor() {
    this.globeView = false;
    this.initPipOption();
    this.initGlobeOption();
    this.initBarOption();
  }

  getPipData(count) {
    let nameList = [
      '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    let legendData = [];
    let seriesData = [];
    let selected = {};
    for (let i = 0; i < 50; i++) {
      let name = Math.random() > 0.65
        ? makeWord(4, 1) + '·' + makeWord(3, 0)
        : makeWord(2, 1);
      legendData.push(name);
      seriesData.push({
        name: name,
        value: Math.round(Math.random() * 100000)
      });
      selected[name] = i < 6;
    }

    return {
      legendData: legendData,
      seriesData: seriesData,
      selected: selected
    };

    function makeWord(max, min) {
      let nameLen = Math.ceil(Math.random() * max + min);
      let name = [];
      for (let i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join('');
    }
  }

  initPipOption() {
    let data = this.getPipData(50);
    this.pipOption = {
      title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      width: '100%',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,
        selected: data.selected
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '60%',
          center: ['40%', '50%'],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  initBarOption() {
    this.barOption = {
      color: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
      title: {
        text: '3D堆叠柱状图',
        x: 'center'
      },
      tooltip: {},
      xAxis3D: {
        type: 'category',
        data: ['苹果', '橘子', '梨', '葡萄', '香蕉']
      },
      yAxis3D: {
        type: 'category',
        data: ['']
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        boxWidth: 200,
        boxDepth: 20,
        axisPointer: {
          show: false
        },
        light: {
          main: {
            intensity: 1.2
          },
          ambient: {
            intensity: 0.3
          }
        },
        viewControl: {
          alpha: 10, // 控制场景平移旋转
          beta: 20,
          minAlpha: 10,
          maxAlpha: 10,
          minBeta: 20,
          maxBeta: 20
        }
      },
      series: [{
        type: 'bar3D',
        barSize: 15,
        data: [
          [0, 0, 5],
          [1, 0, 3],
          [2, 0, 4],
          [3, 0, 7],
          [4, 0, 2]
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
          label: {
            show: false
          }
        }
      }, {
        type: 'bar3D',
        barSize: 15,
        data: [
          [0, 0, 3],
          [1, 0, 4],
          [2, 0, 4],
          [3, 0, 2],
          [4, 0, 5]
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
          label: {
            show: false
          }
        }
      }]
    };
  }

  initGlobeOption() {
    this.globeOption = {
      backgroundColor: '#000',
      globe: {
        baseTexture: './assets/images/world.topo.bathy.200401.jpg',
        heightTexture: './assets/images/bathymetry_bw_composite_4k.jpg',
        displacementScale: 0.2,
        shading: 'realistic',
        environment: './assets/images/starfield.jpg',
        realisticMaterial: {
          // roughness: 'assets/get/s/data-1497599804873-H1SHkG-mZ.jpg',
          // metalness: 'assets/get/s/data-1497599800643-BJbHyGWQW.jpg',
          textureTiling: [8, 4]
        },
        postEffect: {
          enable: true
        },
        viewControl: {
          autoRotate: true
        },
        light: {
          main: {
            intensity: 2,
            shadow: true
          },
          ambientCubemap: {
            texture: './assets/pisa.hdr',
            exposure: 2,
            diffuseIntensity: 2,
            specularIntensity: 2
          }
        }
      }
    };
  }

  ngOnInit() {
  }

}
