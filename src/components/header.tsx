import { Button } from "@chakra-ui/react";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <Button>
            Settings
          </Button>
          <Button>
            Account
          </Button>
        </div>
      </div>
    </header>
  )
}

