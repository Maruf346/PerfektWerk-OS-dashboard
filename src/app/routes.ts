import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { SalesPage } from "./pages/SalesPage";
import { SubscriptionPage } from "./pages/SubscriptionPage";
import { SupportPage } from "./pages/SupportPage";
import { OperationsPage } from "./pages/OperationsPage";
import { PlatformPage } from "./pages/PlatformPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { AdministrationPage } from "./pages/AdministrationPage";
import { CompanyDetailPage } from "./pages/CompanyDetailPage";
import { SubscriptionRequestDetailsPage } from "./pages/SubscriptionRequestDetailsPage";
import { GenerateInvoicePage } from "./pages/GenerateInvoicePage";
import { TicketingWorkspacePage } from "./pages/TicketingWorkspacePage";
import { KnowledgeHubPage } from "./pages/KnowledgeHubPage";
import { DocumentationLibraryPage } from "./pages/DocumentationLibraryPage";
import { FaqEditorPage } from "./pages/FaqEditorPage";
import { SetupGuidesPage } from "./pages/SetupGuidesPage";
import { CompanyAnalyticsPage } from "./pages/CompanyAnalyticsPage";
import { AnnouncementsPage } from "./pages/AnnouncementsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "companies", Component: CompaniesPage },
      { path: "companies/:id", Component: CompanyDetailPage },
      { path: "sales", Component: SalesPage },
      { path: "subscription", Component: SubscriptionPage },
      { path: "subscription/request/:id", Component: SubscriptionRequestDetailsPage },
      { path: "subscription/invoice", Component: GenerateInvoicePage },
      { path: "support", Component: SupportPage },
      { path: "support/ticket/:id", Component: TicketingWorkspacePage },
      {
        path: "support/knowledge-hub",
        children: [
          { index: true, Component: KnowledgeHubPage },
          { path: "documentation", Component: DocumentationLibraryPage },
          { path: "faqs", Component: FaqEditorPage },
          { path: "setup-guides", Component: SetupGuidesPage },
        ],
      },
      { path: "operations", Component: OperationsPage },
      { path: "operations/announcements", Component: AnnouncementsPage },
      { path: "platform", Component: PlatformPage },
      { path: "analytics", Component: AnalyticsPage },
      { path: "analytics/company/:id", Component: CompanyAnalyticsPage },
      { path: "administration", Component: AdministrationPage },
    ],
  },
]);
