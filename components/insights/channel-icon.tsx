/**
 * Channel icons and labels (A2-5).
 * Props are strictly typed from `@/contracts/customer-insights`.
 */
import type { ComponentType } from "react"
import {
  Camera,
  Mail,
  MessageCircle,
  MessageSquare,
  MessageSquareDot,
  Phone,
  Send,
  Smartphone,
  Video,
  type LucideProps,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { Channel } from "@/contracts/customer-insights"
import { cn } from "@/lib/utils"

interface ChannelMeta {
  label: string
  Icon: ComponentType<LucideProps>
  colorClass: string
}

const channelMeta: Record<Channel, ChannelMeta> = {
  web_chat: {
    label: "Web Chat",
    Icon: MessageSquare,
    colorClass: "text-blue-500",
  },
  voice: {
    label: "Voice",
    Icon: Phone,
    colorClass: "text-emerald-500",
  },
  mobile_app: {
    label: "Mobile App",
    Icon: Smartphone,
    colorClass: "text-indigo-500",
  },
  whatsapp: {
    label: "WhatsApp",
    Icon: MessageCircle,
    colorClass: "text-green-500",
  },
  messenger: {
    label: "Messenger",
    Icon: Send,
    colorClass: "text-sky-500",
  },
  instagram: {
    label: "Instagram",
    Icon: Camera,
    colorClass: "text-pink-500",
  },
  tiktok: {
    label: "TikTok",
    Icon: Video,
    colorClass: "text-purple-500",
  },
  email: {
    label: "Email",
    Icon: Mail,
    colorClass: "text-amber-500",
  },
  sms: {
    label: "SMS",
    Icon: MessageSquareDot,
    colorClass: "text-teal-500",
  },
}

export const allChannels: Channel[] = [
  "web_chat",
  "voice",
  "mobile_app",
  "whatsapp",
  "messenger",
  "instagram",
  "tiktok",
  "email",
  "sms",
]

export function ChannelIcon({
  channel,
  className,
  size = 16,
}: {
  channel: Channel
  className?: string
  size?: number
}) {
  const meta = channelMeta[channel]
  const Icon = meta.Icon
  return (
    <Icon
      size={size}
      className={cn(meta.colorClass, className)}
      aria-label={meta.label}
    />
  )
}

export function ChannelBadge({
  channel,
  className,
}: {
  channel: Channel
  className?: string
}) {
  const meta = channelMeta[channel]
  return (
    <Badge
      variant="outline"
      className={cn("inline-flex items-center gap-1.5 font-normal", className)}
    >
      <ChannelIcon channel={channel} size={14} />
      <span>{meta.label}</span>
    </Badge>
  )
}
