import {
    Calculator,
    Calendar,
    Smile,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  
  export function CommandDemo() {
    return (
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." hidden={false} />
        <CommandList className="hidden">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" >
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    )
  }
  