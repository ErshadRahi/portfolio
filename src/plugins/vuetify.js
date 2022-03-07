import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/src/styles/main.sass';
import fa from 'vuetify/src/locale/fa.ts';

Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'
export default new Vuetify({

  
    rtl: true,
    lang: {
      locales: { fa },
      current: 'fa',
    },
  theme: {
      options: { customProperties: true },
        themes: {
          light: {
            bgtheme: '#1E1E2D',
            bgsecondary : '#99ca3c',
            primary: '#1976D2',
            secondary: '#C8E6C9',
            error: '#FF5252',
            warning: '#FB8C00',
            success: '#4CAF50',
            info: '#00A7DF',
            btn: colors.grey.darken4,

            // bg:'#f3f2ef',
            
            // theme1: '#7e489c',
            theme: {
              base: colors.blueGrey.lighten5,
              darken1: colors.blueGrey.lighten4,
              darken2: colors.blueGrey.lighten3, 
              darken3: colors.blueGrey.lighten2,
              darken4: colors.blueGrey.lighten1,
              darken5: colors.blueGrey.darken1,
              darken6: colors.blueGrey.darken2,
              darken7: colors.blueGrey.darken3,
              darken8: colors.blueGrey.darken4,
              darken9: colors.blueGrey.darken5,
            },
            
          },
          dark: {
            bgtheme: '#1E1E2D',
            bgsecondary : '#99ca3c',
            primary: '#388DE1',
            secondary: '#AAEBAC',
            error: '#EF5350',
            warning: '#FFA726',
            success: '#66BB6A',
            info: '#42A5F5',
            btn: colors.grey.darken4,
            theme: {
              base: colors.blueGrey.darken5,
              darken1: colors.blueGrey.darken4,
              darken2: colors.blueGrey.darken3,
              darken3: colors.blueGrey.darken2,
              darken4: colors.blueGrey.darken1,
              darken5: colors.blueGrey.lighten1,
              darken6: colors.blueGrey.lighten2, 
              darken7: colors.blueGrey.lighten3,
              darken8: colors.blueGrey.lighten4,
              darken9: colors.blueGrey.lighten5,
            },
          }
        },
      },
});
