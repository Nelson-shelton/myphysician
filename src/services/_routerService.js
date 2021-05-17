// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import CalendarComponents from 'Routes/calendar';
import FormElements from 'Routes/forms';
import Components from 'Routes/components';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import ImageCropper from 'Routes/image-cropper';

// async component
import {
   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'widgets',
      component: Widgets
   },
   {
      path: 'forms',
      component: FormElements
   },
   {
      path: 'ecommerce',
      component: Ecommerce
   },
   {
      path: 'pages',
      component: Pages
   },
   {
      path: 'chat',
      component: AsyncChatComponent
   },
   {
      path: 'mail',
      component: AsyncMailComponent
   },
   {
      path: 'todo',
      component: AsyncTodoComponent
   },
   {
      path: 'ui-components',
      component: Components
   },

   {
      path: 'forms',
      component: FormElements
   },
   {
      path: 'calendar',
      component: CalendarComponents
   },
   {
      path: 'image-cropper',
      component: ImageCropper
   }
]
