import { Layout } from "../components/layouts";
import { EntryList } from "../components/ui";
import { Status } from "../interfaces";

export default function Home() {
  return (
    <Layout title="Home - Trello">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>To Do</h2>
          <div>
            <EntryList status={Status.PENDING} />
          </div>
        </div>
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>In Progress</h2>
          <div>
            <EntryList status={Status.IN_PROGRESS} />
          </div>
        </div>
        <div className="bg-slate-800 p-2 h-[calc(100vh_-_100px)]">
          <h2>Completed</h2>
          <div>
            <EntryList status={Status.FINISHED} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
