"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pointer-events-none space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" name="message" rows={5} required />
      </div>
      <Button
        type="button"
        tabIndex={-1}
        className="w-full cursor-default bg-blue-900 font-semibold text-white hover:bg-blue-800 sm:w-auto sm:min-w-[160px]"
      >
        Submit
      </Button>
    </form>
  )
}
