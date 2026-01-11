"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Paperclip, X, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [attachment, setAttachment] = useState<File | null>(null)
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    if (!consent) {
      newErrors.consent = "You must agree to the privacy policy"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // UI-only submission - ready for backend integration
      setSubmitted(true)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0])
    }
  }

  const removeAttachment = () => {
    setAttachment(null)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank you for your inquiry</h3>
        <p className="text-muted-foreground">We have received your message and will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`mt-1.5 ${errors.email ? "border-destructive" : ""}`}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Describe your requirements..."
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`mt-1.5 ${errors.message ? "border-destructive" : ""}`}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <div>
        <Label>Attachment</Label>
        <div className="mt-1.5">
          {attachment ? (
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Paperclip className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground flex-1 truncate">{attachment.name}</span>
              <button
                type="button"
                onClick={removeAttachment}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Remove attachment"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-2 p-3 border border-dashed border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
              <Paperclip className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Click to attach a file</span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
        <div>
          <Label htmlFor="consent" className="font-normal leading-relaxed cursor-pointer">
            I agree to the{" "}
            <Link href="/privacy-cookies" className="text-primary hover:underline">
              Privacy & Cookies policy
            </Link>{" "}
            and understand that my data will be stored in our CRM to respond to my inquiry.{" "}
            <span className="text-destructive">*</span>
          </Label>
          {errors.consent && <p className="text-sm text-destructive mt-1">{errors.consent}</p>}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send inquiry
      </Button>
    </form>
  )
}
