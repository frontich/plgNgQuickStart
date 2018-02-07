/** javascript import statement */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/** AppModule == simbol, you can find it inside app.module  */
import { AppModule } from './app.module';

/** dynamic platform browser vrs static browser platform :) 
 *  boostrap module
*/
platformBrowserDynamic().bootstrapModule(AppModule);
