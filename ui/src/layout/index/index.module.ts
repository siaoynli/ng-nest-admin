import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { IndexRoutesModule } from './index-routes.module';
import { IndexComponent } from './index.component';
import { SiderComponent } from './sider/sider.component';
import { SiderNodeComponent } from './sider/sider-node/sider-node.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CrumbComponent } from './crumb/crumb.component';
import { FloatNodeComponent } from './sider/float-node/float-node.component';
import { XIconModule } from '@ng-nest/ui/icon';
import { XPortalModule } from '@ng-nest/ui/portal';
import { XCrumbModule } from '@ng-nest/ui/crumb';
import { XSliderModule } from '@ng-nest/ui/slider';

// 声明模块中拥有的视图类
const components = [
  IndexComponent,
  ContentComponent,
  HeaderComponent,
  SiderComponent,
  SiderNodeComponent,
  FloatNodeComponent,
  TabsComponent,
  CrumbComponent,
  ToggleComponent
];

const entryComponents = [FloatNodeComponent];

@NgModule({
  imports: [CommonModule, ShareModule, IndexRoutesModule, XIconModule, XPortalModule, XCrumbModule, XSliderModule],
  declarations: [...components],
  entryComponents: [...entryComponents],
  exports: [...components]
})
export class IndexModule {}
