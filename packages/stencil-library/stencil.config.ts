import { Config } from '@stencil/core';
import {angularOutputTarget, ValueAccessorConfig} from "@stencil/angular-output-target";

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: [
        {
          elementSelectors: ['simple-input', 'custom-input'],
          event: 'myChange',
          // This doesn't seem to really work. No matter how you name this prop, the value accessor will always bind to "value"
          targetAttr: 'value',
          type: 'text',
        }
      ]
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
