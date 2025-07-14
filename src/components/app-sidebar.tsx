"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./TheToggle";
import Link from "next/link";
import TheGitHub from "./icons/TheGitHub";
import { useTheme } from "next-themes";
import { THEME } from "@/constants/theme";
import { data } from "@/utils/sidebar-menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme } = useTheme();

  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <div className=" flex aspect-square size-8 items-center justify-center rounded-lg">
                  <ModeToggle />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Test Dashboard</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.sidebarMenu.map((item, index) => (
              <Collapsible
                key={item.title}
                // defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>

          <div className="mt-5">
            <strong>Social</strong>
            <SidebarMenu className="mt-1">
              <SidebarMenuItem>
                <Link
                  href={"https://github.com/Mushkir/dashboard-next-js-app"}
                  target="_blank"
                  className={`${
                    rendered && theme == THEME.DARK
                      ? "hover:bg-gray-800"
                      : "hover:bg-slate-200"
                  } flex items-center space-x-2 transition-all rounded-lg p-2`}
                >
                  <div className="text-xl">
                    <TheGitHub />
                  </div>
                  <span className="text-sm">GitHub</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
