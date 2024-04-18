"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.string().email(),
  title: z.string().min(5),
  message: z.string().min(10),
});

type Props = {};

export default function ContactForm({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Send the form data to the server
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="imie.nazwisk@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Podaj swój adres email, abyśmy mogli się z Tobą skontaktować.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Temat</FormLabel>
              <FormControl>
                <Input placeholder="Temat wiadomości" {...field} />
              </FormControl>
              <FormDescription>
                Podaj temat wiadomości, abyśmy mogli szybko zrozumieć, o co
                chodzi.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wiadomość</FormLabel>
              <FormControl>
                <Textarea placeholder="Treść wiadomości" rows={5} {...field} />
              </FormControl>
              <FormDescription>
                Napisz nam, co chcesz nam przekazać. Im więcej informacji, tym
                lepiej.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg">
          Wyślij
        </Button>
      </form>
    </Form>
  );
}
