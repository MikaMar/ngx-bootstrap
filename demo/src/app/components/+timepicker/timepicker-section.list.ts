import { DemoTimepickerBasicComponent } from './demos/basic/basic';
import { DemoTimepickerMeridianComponent } from './demos/meridian/meridian';
import { DemoTimepickerCustomMeridianComponent } from './demos/custom-meridian/custom-meridian';
import { DemoTimepickerMinMaxComponent } from './demos/min-max/min-max';
import { DemoTimepickerToggleMinutesSecondsComponent } from './demos/toggle-minutes-seconds/toggle-minutes-seconds';
import { DemoTimepickerDisabledComponent } from './demos/disabled/disabled';
import { DemoTimepickerCustomComponent } from './demos/custom/custom';
import { DemoTimepickerCustomValidationComponent } from './demos/custom-validation/custom-validation';
import { DemoTimepickerDynamicComponent } from './demos/dynamic/dynamic';
import { DemoTimepickerMousewheelArrowkeysComponent } from './demos/mousewheel-arrowkeys/mousewheel-arrowkeys';
import { DemoTimepickerConfigComponent } from './demos/config/config';
import { DemoTimepickerSpinnersComponent } from './demos/spinners/spinners';

import { ContentSection } from '../../docs/models/content-section.model';
import { DemoTopSectionComponent } from '../../docs/demo-section-components/demo-top-section/index';
import { ExamplesComponent } from '../../docs/demo-section-components/demo-examples-section/index';
import { ApiSectionsComponent } from '../../docs/demo-section-components/demo-api-section/index';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '../../docs/api-docs';

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader?lang=typescript!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: require('!!raw-loader?lang=typescript!./demos/basic/basic'),
        html: require('!!raw-loader?lang=markup!./demos/basic/basic.html'),
        outlet: DemoTimepickerBasicComponent
      },
      {
        title: 'Meridian',
        anchor: 'meridian',
        component: require('!!raw-loader?lang=typescript!./demos/meridian/meridian'),
        html: require('!!raw-loader?lang=markup!./demos/meridian/meridian.html'),
        outlet: DemoTimepickerMeridianComponent
      },
      {
        title: 'Custom meridian',
        anchor: 'custom-meridian',
        component: require('!!raw-loader?lang=typescript!./demos/custom-meridian/custom-meridian'),
        html: require('!!raw-loader?lang=markup!./demos/custom-meridian/custom-meridian.html'),
        outlet: DemoTimepickerCustomMeridianComponent
      },
      {
        title: 'Min - Max',
        anchor: 'min-max',
        component: require('!!raw-loader?lang=typescript!./demos/min-max/min-max'),
        html: require('!!raw-loader?lang=markup!./demos/min-max/min-max.html'),
        outlet: DemoTimepickerMinMaxComponent
      },
      {
        title: 'Toggle minutes/seconds',
        anchor: 'toggleMinutesSeconds',
        component: require('!!raw-loader?lang=typescript!./demos/toggle-minutes-seconds/toggle-minutes-seconds'),
        html: require('!!raw-loader?lang=markup!./demos/toggle-minutes-seconds/toggle-minutes-seconds.html'),
        outlet: DemoTimepickerToggleMinutesSecondsComponent
      },
      {
        title: 'Disabled',
        anchor: 'disabled',
        component: require('!!raw-loader?lang=typescript!./demos/disabled/disabled'),
        html: require('!!raw-loader?lang=markup!./demos/disabled/disabled.html'),
        outlet: DemoTimepickerDisabledComponent
      },
      {
        title: 'Custom steps',
        anchor: 'custom',
        component: require('!!raw-loader?lang=typescript!./demos/custom/custom'),
        html: require('!!raw-loader?lang=markup!./demos/custom/custom.html'),
        outlet: DemoTimepickerCustomComponent
      },
      {
        title: 'Custom validation',
        anchor: 'custom-validation',
        component: require('!!raw-loader?lang=typescript!./demos/custom-validation/custom-validation'),
        html: require('!!raw-loader?lang=markup!./demos/custom-validation/custom-validation.html'),
        outlet: DemoTimepickerCustomValidationComponent
      },
      {
        title: 'Dynamic',
        anchor: 'dynamic',
        component: require('!!raw-loader?lang=typescript!./demos/dynamic/dynamic'),
        html: require('!!raw-loader?lang=markup!./demos/dynamic/dynamic.html'),
        outlet: DemoTimepickerDynamicComponent
      },
      {
        title: 'Mouse wheel and Arrow keys',
        anchor: 'mouse-wheel',
        component: require('!!raw-loader?lang=typescript!./demos/mousewheel-arrowkeys/mousewheel-arrowkeys'),
        html: require('!!raw-loader?lang=markup!./demos/mousewheel-arrowkeys/mousewheel-arrowkeys.html'),
        outlet: DemoTimepickerMousewheelArrowkeysComponent
      },
      {
        title: 'Spinners',
        anchor: 'spinners',
        component: require('!!raw-loader?lang=typescript!./demos/spinners/spinners'),
        html: require('!!raw-loader?lang=markup!./demos/spinners/spinners.html'),
        outlet: DemoTimepickerSpinnersComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults',
        component: require('!!raw-loader?lang=typescript!./demos/config/config'),
        html: require('!!raw-loader?lang=markup!./demos/config/config.html'),
        outlet: DemoTimepickerConfigComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'TimepickerComponent',
        anchor: 'timepicker-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'TimepickerConfig',
        anchor: 'timepicker-config',
        outlet: NgApiDocConfigComponent
      }
    ]
  }
];
