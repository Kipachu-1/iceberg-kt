import { useState } from "react";
import { columns as userColumns } from "./components/users/columns";
import { DataTable } from "./components/users/data-table";
import { useUsers } from "./hooks/use-users";
import { TUserQueryParams } from "./types";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  const [settings, setSettings] = useState<TUserQueryParams>({
    limit: 10,
    skip: 10,
  });

  const { users, isLoading, isFetching, isError, refetch } = useUsers({
    params: settings,
  });

  return (
    <div className="w-full h-full flex justify-center relative items-center min-h-screen pt-[100px] box-border">
      <div className="flex flex-col gap-2 absolute top-4">
        <p className="text-sm">Settings</p>
        <div className="flex gap-2 items-center">
          <Input
            className="h-[30px] text-sm rounded"
            type="number"
            placeholder="Limit"
            value={settings.limit}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 0) setSettings({ ...settings, limit: value });
            }}
          />
        </div>
        <div className="flex gap-2 items-center">
          <Input
            className="h-[30px] text-sm rounded"
            type="number"
            placeholder="Skip"
            value={settings.skip}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 0) setSettings({ ...settings, skip: value });
            }}
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={() => refetch()}
          size={"sm"}
          className="rounded"
        >
          Reload
        </Button>
      </div>
      <div className="max-w-[700px] w-full">
        {(isLoading || isFetching) && (
          <div className="w-full h-[50px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
        {isError && (
          <div className="w-full h-[50px] flex justify-center items-center">
            <p>Error while getting users</p>
          </div>
        )}
        <DataTable data={users} columns={userColumns} />
      </div>
    </div>
  );
}

export default App;
