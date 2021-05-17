/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

// ecommerce dashboard
const AsyncEcommerceDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/patientDetails"),
   loading: () => <RctPageLoader />,
});

// agency dashboard
const AsyncSaasDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/saas"),
   loading: () => <RctPageLoader />,
});

// agency dashboard
const AsyncAgencyDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/agency"),
   loading: () => <RctPageLoader />,
});

// boxed dashboard
const AsyncNewsDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/news"),
   loading: () => <RctPageLoader />,
});

const AsyncUserWidgetComponent = Loadable({
   loader: () => import("Routes/widgets/user-widgets"),
   loading: () => <RctPageLoader />,
});

const AsyncUserChartsComponent = Loadable({
   loader: () => import("Routes/widgets/charts-widgets"),
   loading: () => <RctPageLoader />,
});

const AsyncGeneralWidgetsComponent = Loadable({
   loader: () => import("Routes/widgets/general-widgets"),
   loading: () => <RctPageLoader />,
});

const AsyncPromoWidgetsComponent = Loadable({
   loader: () => import("Routes/widgets/promo-widgets"),
   loading: () => <RctPageLoader />,
});



// chat app
const AsyncChatComponent = Loadable({
   loader: () => import("Routes/chat"),
   loading: () => <RctPageLoader />,
});

// mail app
const AsyncMailComponent = Loadable({
   loader: () => import("Routes/mail"),
   loading: () => <RctPageLoader />,
});

// todo app
const AsyncTodoComponent = Loadable({
   loader: () => import("Routes/todo"),
   loading: () => <RctPageLoader />,
});

// gallery
const AsyncGalleryComponent = Loadable({
   loader: () => import("Routes/pages/gallery"),
   loading: () => <RctPageLoader />,
});

// feedback
const AsyncFeedbackComponent = Loadable({
   loader: () => import("Routes/pages/feedback"),
   loading: () => <RctPageLoader />,
});

// report
const AsyncReportComponent = Loadable({
   loader: () => import("Routes/pages/report"),
   loading: () => <RctPageLoader />,
});

// faq
const AsyncFaqComponent = Loadable({
   loader: () => import("Routes/pages/faq"),
   loading: () => <RctPageLoader />,
});

// pricing
const AsyncPricingComponent = Loadable({
   loader: () => import("Routes/pages/pricing"),
   loading: () => <RctPageLoader />,
});

// blank
const AsyncBlankComponent = Loadable({
   loader: () => import("Routes/pages/blank"),
   loading: () => <RctPageLoader />,
});







// Basic Calendar
const AsyncBasicCalendarComponent = Loadable({
   loader: () => import("Routes/calendar/BasicCalendar"),
   loading: () => <RctPageLoader />,
});

// Cultures Calendar
const AsyncCulturesComponent = Loadable({
   loader: () => import("Routes/calendar/Cultures"),
   loading: () => <RctPageLoader />,
});

// Selectable Calendar
const AsyncSelectableComponent = Loadable({
   loader: () => import("Routes/calendar/Selectable"),
   loading: () => <RctPageLoader />,
});

// Custom Calendar
const AsyncCustomComponent = Loadable({
   loader: () => import("Routes/calendar/Custom"),
   loading: () => <RctPageLoader />,
});

/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable({
   loader: () => import("Routes/session/login"),
   loading: () => <RctPageLoader />,
});

// Session Register
const AsyncSessionRegisterComponent = Loadable({
   loader: () => import("Routes/session/register"),
   loading: () => <RctPageLoader />,
});

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
   loader: () => import("Routes/session/lock-screen"),
   loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
   loader: () => import("Routes/session/forgot-password"),
   loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
   loader: () => import("Routes/session/404"),
   loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage500Component = Loadable({
   loader: () => import("Routes/session/500"),
   loading: () => <RctPageLoader />,
});

// terms and condition
const AsyncTermsConditionComponent = Loadable({
   loader: () => import("Routes/pages/terms-condition"),
   loading: () => <RctPageLoader />,
});


// components Alerts
const AsyncUIAlertsComponent = Loadable({
   loader: () => import("Routes/components/alert"),
   loading: () => <RctPageLoader />,
});

// components Appbar
const AsyncUIAppbarComponent = Loadable({
   loader: () => import("Routes/components/app-bar"),
   loading: () => <RctPageLoader />,
});

// components BottomNavigation
const AsyncUIBottomNavigationComponent = Loadable({
   loader: () => import("Routes/components/bottom-navigation"),
   loading: () => <RctPageLoader />,
});

// components BottomNavigation
const AsyncUIAvatarsComponent = Loadable({
   loader: () => import("Routes/components/avatar"),
   loading: () => <RctPageLoader />,
});

// components Buttons
const AsyncUIButtonsComponent = Loadable({
   loader: () => import("Routes/components/buttons"),
   loading: () => <RctPageLoader />,
});

// components Badges
const AsyncUIBadgesComponent = Loadable({
   loader: () => import("Routes/components/badges"),
   loading: () => <RctPageLoader />,
});

// components CardMasonary
const AsyncUICardMasonaryComponent = Loadable({
   loader: () => import("Routes/components/card-masonry"),
   loading: () => <RctPageLoader />,
});

// components Cards
const AsyncUICardsComponent = Loadable({
   loader: () => import("Routes/components/cards"),
   loading: () => <RctPageLoader />,
});

// components Chips
const AsyncUIChipsComponent = Loadable({
   loader: () => import("Routes/components/chip"),
   loading: () => <RctPageLoader />,
});

// components Dialog
const AsyncUIDialogComponent = Loadable({
   loader: () => import("Routes/components/dialog"),
   loading: () => <RctPageLoader />,
});

// components Dividers
const AsyncUIDividersComponent = Loadable({
   loader: () => import("Routes/components/dividers"),
   loading: () => <RctPageLoader />,
});

// components Drawers
const AsyncUIDrawersComponent = Loadable({
   loader: () => import("Routes/components/drawers"),
   loading: () => <RctPageLoader />,
});

// components Accordion
const AsyncUIExpansionPanelComponent = Loadable({
   loader: () => import("Routes/components/expansion-panel"),
   loading: () => <RctPageLoader />,
});

// components Grid List
const AsyncUIGridListComponent = Loadable({
   loader: () => import("Routes/components/grid-list"),
   loading: () => <RctPageLoader />,
});

// components List
const AsyncUIListComponent = Loadable({
   loader: () => import("Routes/components/list"),
   loading: () => <RctPageLoader />,
});

// components Menu
const AsyncUIMenuComponent = Loadable({
   loader: () => import("Routes/components/menu"),
   loading: () => <RctPageLoader />,
});

// components Popover
const AsyncUIPopoverComponent = Loadable({
   loader: () => import("Routes/components/popover"),
   loading: () => <RctPageLoader />,
});

// components Progress
const AsyncUIProgressComponent = Loadable({
   loader: () => import("Routes/components/progress"),
   loading: () => <RctPageLoader />,
});

// components Snackbar
const AsyncUISnackbarComponent = Loadable({
   loader: () => import("Routes/components/snackbar"),
   loading: () => <RctPageLoader />,
});

// components SelectionControls
const AsyncUISelectionControlsComponent = Loadable({
   loader: () => import("Routes/components/selection-controls"),
   loading: () => <RctPageLoader />,
});

const AsyncSelectListComponent = Loadable({
  loader: () => import("Routes/forms/select-list"),
  loading: () => <RctPageLoader />,
});
// reports

export {
  AsyncSelectListComponent,
   AsyncUserWidgetComponent,
   AsyncUserChartsComponent,
   AsyncGeneralWidgetsComponent,
   AsyncPromoWidgetsComponent,

   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
   AsyncGalleryComponent,
   AsyncFeedbackComponent,
   AsyncReportComponent,
   AsyncFaqComponent,
   AsyncPricingComponent,
   AsyncBlankComponent,






   AsyncBasicCalendarComponent,
   AsyncCulturesComponent,
   AsyncSelectableComponent,
   AsyncCustomComponent,
   AsyncSessionLoginComponent,
   AsyncSessionRegisterComponent,
   AsyncSessionLockScreenComponent,
   AsyncSessionForgotPasswordComponent,
   AsyncSessionPage404Component,
   AsyncSessionPage500Component,
   AsyncTermsConditionComponent,




   AsyncUIAlertsComponent,
   AsyncUIAppbarComponent,
   AsyncUIBottomNavigationComponent,
   AsyncUIAvatarsComponent,
   AsyncUIButtonsComponent,
   AsyncUIBadgesComponent,
   AsyncUICardMasonaryComponent,
   AsyncUICardsComponent,
   AsyncUIChipsComponent,
   AsyncUIDialogComponent,
   AsyncUIDividersComponent,
   AsyncUIDrawersComponent,
   AsyncUIExpansionPanelComponent,
   AsyncUIGridListComponent,
   AsyncUIListComponent,
   AsyncUIMenuComponent,
   AsyncUIPopoverComponent,
   AsyncUIProgressComponent,
   AsyncUISnackbarComponent,
   AsyncUISelectionControlsComponent,

   AsyncEcommerceDashboardComponent,
   AsyncSaasDashboardComponent,
   AsyncAgencyDashboardComponent,
   AsyncNewsDashboardComponent
};
