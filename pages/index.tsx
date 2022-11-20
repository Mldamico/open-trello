import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";
import { Status } from "../interfaces";

export default function Home() {
  return (
    <Layout title="Home - Trello">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>To Do</h2>

          <NewEntry />
          <EntryList status={Status.PENDING} />
        </div>
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>In Progress</h2>

          <EntryList status={Status.IN_PROGRESS} />
        </div>
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>Completed</h2>

          <EntryList status={Status.FINISHED} />
        </div>
      </div>
    </Layout>
  );
}
