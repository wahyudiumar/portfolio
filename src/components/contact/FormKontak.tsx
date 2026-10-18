import { Button } from "@components/shadcn/Button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@shadcn/InputGroup";

import { Mail, MessageSquare, User } from "lucide-react";

function FormKontak() {
  return (
    <form>
      <div className="flex flex-col gap-y-4">
        <InputGroup className="h-auto py-1.5 border-2 bg-neutral-900 border-neutral-800 text-neutral-50  px-2 focus:">
          <InputGroupInput placeholder="Nama Anda" className="" />
          <InputGroupAddon>
            <User className="text-neutral-400" />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup className="h-auto py-1.5 border-2 bg-neutral-900 border-neutral-800 text-neutral-50  px-2 focus:">
          <InputGroupInput placeholder="Email Anda" className="" />
          <InputGroupAddon>
            <Mail className="text-neutral-400" />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup className="h-auto py-1.5 border-2 bg-neutral-900 border-neutral-800 text-neutral-50 items-start px-2 focus:">
          <InputGroupTextarea placeholder="Pesan Anda" className="min-h-40" />
          <InputGroupAddon>
            <MessageSquare className="text-neutral-400 mt-1.5" />
          </InputGroupAddon>
        </InputGroup>

        <Button
          variant="outline"
          className="border-orange-500 font-bold py-5 text-orange-500 hover:text-neutral-50 hover:bg-orange-600"
        >
          Kirim Pesan
        </Button>
      </div>
    </form>
  );
}

export { FormKontak };
