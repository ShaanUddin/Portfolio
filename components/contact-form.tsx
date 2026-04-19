"use client";

import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const endpoint = site.formEndpoint;

  const mailtoHref = React.useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(message || "");
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [name, message]);

  if (endpoint) {
    return (
      <form action={endpoint} method="POST" className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name <span className="text-red-400">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 border-input bg-background"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 border-input bg-background"
            placeholder="you@domain.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground" htmlFor="message">
            Message <span className="text-red-400">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 min-h-[140px] border-input bg-background"
            placeholder="What are we building?"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base">
          Submit
        </Button>
      </form>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="c-name">
          Name
        </label>
        <Input
          id="c-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 border-input bg-background"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="c-msg">
          Message
        </label>
        <Textarea
          id="c-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 min-h-[140px] border-input bg-background"
          placeholder="A short note works—what you’re hiring for, timelines, links…"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={mailtoHref} className={cn(buttonVariants({ size: "lg" }), "flex-1 justify-center rounded-xl text-base")}>
          Open in email
        </a>
        <a
          href={site.twitterUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "flex-1 justify-center rounded-xl border-border bg-transparent text-base"
          )}
        >
          Message on X (Twitter)
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        Tip: add <code className="rounded bg-muted px-1">NEXT_PUBLIC_FORM_ENDPOINT</code> later to post submissions to
        Formspree/Web3Forms without changing UI code.
      </p>
    </div>
  );
}
