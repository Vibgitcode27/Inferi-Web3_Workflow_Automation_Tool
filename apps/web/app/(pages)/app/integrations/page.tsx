"use client";

import { useState } from "react";
import { Settings, Plus, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import slack from "../../../assets/slack.png"
import gmail from "../../../assets/gmail.png"
import googleSheets from "../../../assets/googlesheet.png"
import github from "../../../assets/github3.png"
import notion from "../../../assets/notion.png"

// Hardcoded integrations data
const hardcodedIntegrations = [
  {
    id: 1,
    name: "slack",
    display_name: "Slack",
    description: "Connect with Slack to send messages and notifications",
    category: "Communication",
    is_active: true,
    isConnected: true,
    status: "active",
    connectionId: "conn_1",
    auth_type: "oauth"
  },
  {
    id: 2,
    name: "gmail",
    display_name: "Gmail",
    description: "Send and receive emails via Gmail",
    category: "Email",
    is_active: true,
    isConnected: false,
    status: "inactive",
    connectionId: "",
    auth_type: "oauth"
  },
  {
    id: 3,
    name: "sheets",
    display_name: "Google Sheets",
    description: "Create and update spreadsheets",
    category: "Productivity",
    is_active: true,
    isConnected: true,
    status: "active",
    connectionId: "conn_3",
    auth_type: "api"
  },
  {
    id: 4,
    name: "github",
    display_name: "GitHub",
    description: "Manage repositories and track code changes",
    category: "Development",
    is_active: true,
    isConnected: false,
    status: "inactive",
    connectionId: "",
    auth_type: "oauth"
  },
  {
    id: 5,
    name: "hubspot",
    display_name: "HubSpot",
    description: "Manage contacts and track customer interactions",
    category: "CRM",
    is_active: true,
    isConnected: false,
    status: "inactive",
    connectionId: "",
    auth_type: "mixed"
  },
  {
    id: 6,
    name: "notion",
    display_name: "Notion",
    description: "Create and organize documents, notes, and databases",
    category: "Productivity",
    is_active: false,
    isConnected: false,
    status: "inactive",
    connectionId: "",
    auth_type: "oauth"
  },
];

// Icon component with imported images
type IntegrationName = "slack" | "gmail" | "sheets" | "github" | "hubspot" | "notion";

const icons: Record<IntegrationName, any> = {
  slack: slack.src,
  gmail: gmail.src,
  sheets: googleSheets.src,
  github: github.src,
  hubspot: "👥",
  notion: notion.src,
};

type Props = {
  name: IntegrationName | string;
};

const IntegrationIcon = ({ name }: Props) => {
  const icon = icons[name as IntegrationName];
  
  // If it's an image import, render img tag
  if (typeof icon === 'object' || (typeof icon === 'string' && !icon.includes('👥'))) {
    return (
      <div className="w-9 h-9 rounded-lg flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
    );
  }
  
  // Otherwise render emoji
  return (
    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-2xl">
      {icon || "🔗"}
    </div>
  );
};



export default function IntegrationPage() {
  const [integrations, setIntegrations] = useState(hardcodedIntegrations);
  const [disconnecting, setDisconnecting] = useState<string | null>(null);
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleDisconnect = (integrationName : string) => {
    setDisconnecting(integrationName);
    setTimeout(() => {
      setIntegrations(prev =>
        prev.map(integration =>
          integration.name === integrationName
            ? {
                ...integration,
                isConnected: false,
                status: "inactive",
              }
            : integration
        )
      );
      setDisconnecting(null);
    }, 1000);
  };

  const handleConnect = (integrationName : string) => {
    setConnecting(integrationName);
    setTimeout(() => {
      setIntegrations(prev =>
        prev.map(integration =>
          integration.name === integrationName
            ? {
                ...integration,
                isConnected: true,
                status: "active",
                connectionId: `conn_${Date.now()}`
              }
            : integration
        )
      );
      setConnecting(null);
    }, 1000);
  };

  const getStatusText = (status : string) => {
    switch (status) {
      case "active":
        return "Connected";
      case "error":
        return "Error";
      default:
        return "Disconnected";
    }
  };

  const activeIntegrations = integrations.filter(i => i.is_active);
  const inactiveIntegrations = integrations.filter(i => !i.is_active);

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center justify-center">
              <Settings className="w-8 h-8 text-gray-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
              <p className="text-gray-600">
                Connect your favorite tools and services
              </p>
            </div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...activeIntegrations, ...inactiveIntegrations].map((integration) => (
            <Card
              key={integration.id}
              className={`bg-white border-gray-200 hover:border-green-400 hover:shadow-md transition-all duration-200 group relative overflow-hidden px-2 ${
                integration.isConnected ? "ring-1 ring-blue-500/20 shadow-sm shadow-blue-500/10" : ""
              }`}
            >
              <CardHeader className="px-3 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="rounded-lg flex items-center justify-center group-hover:border-gray-300 transition-colors overflow-hidden flex-shrink-0">
                      <IntegrationIcon name={integration.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-gray-900 text-sm font-medium truncate transition-colors duration-200">
                        {integration.display_name}
                      </CardTitle>
                      <div className="flex items-center space-x-1.5 flex-shrink-0 mt-1">
                        <Badge
                          variant={integration.isConnected ? "default" : "secondary"}
                          className={`text-[10px] px-1.5 py-0.5 ${
                            integration.isConnected
                              ? integration.status === "error"
                                ? "bg-red-50 text-red-600 border-red-200"
                                : "bg-green-50 text-green-600 border-green-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {getStatusText(integration.status)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-[calc(100%-60px)] px-3 pt-0">
                <div className="space-y-3">
                  <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                    {integration.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-auto pt-3">
                  {!integration.is_active ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-orange-300 bg-orange-50 text-orange-600 hover:bg-orange-100 hover:border-orange-400 cursor-not-allowed text-xs"
                      disabled
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        <span>Coming Soon</span>
                      </div>
                    </Button>
                  ) : integration.isConnected ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDisconnect(integration.name)}
                      disabled={disconnecting === integration.name}
                      className="flex-1 border-gray-300 text-red-600 bg-white hover:bg-red-50 text-xs"
                    >
                      {disconnecting === integration.name ? (
                        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                      ) : (
                        <X className="w-3 h-3 mr-1" />
                      )}
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleConnect(integration.name)}
                      className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400 text-xs group-hover:border-green-400 group-hover:text-green-600 transition-colors duration-200"
                      size="sm"
                      disabled={connecting === integration.name}
                    >
                      {connecting === integration.name ? (
                        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                      ) : (
                        <Plus className="w-3 h-3 mr-1" />
                      )}
                      {connecting === integration.name ? "Connecting..." : "Connect"}
                    </Button>
                  )}
                </div>
              </CardContent>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-green-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}