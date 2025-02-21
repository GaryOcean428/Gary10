import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface User {
  id: string;
  name: string;
  avatar?: string;
  status: "online" | "offline" | "away";
  lastSeen?: string;
}

interface UserStatusProps {
  users?: User[];
}

const defaultUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    status: "online",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    status: "away",
    lastSeen: "5m ago",
  },
  {
    id: "3",
    name: "Mike Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    status: "offline",
    lastSeen: "2h ago",
  },
];

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  away: "bg-yellow-500",
};

const UserStatus = ({ users = defaultUsers }: UserStatusProps) => {
  return (
    <div className="w-full h-full bg-background border-l p-4">
      <h2 className="text-lg font-semibold mb-4">Online Users</h2>
      <ScrollArea className="h-[calc(100%-2rem)]">
        <div className="space-y-4">
          {users.map((user) => (
            <TooltipProvider key={user.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${statusColors[user.status]}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      {user.status !== "online" && user.lastSeen && (
                        <span className="text-xs text-muted-foreground">
                          {user.lastSeen}
                        </span>
                      )}
                    </div>
                    <Badge
                      variant={
                        user.status === "online" ? "default" : "secondary"
                      }
                      className="ml-auto"
                    >
                      {user.status}
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to view profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default UserStatus;
