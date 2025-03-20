import Datatable from "../../../../components/admin/widgets/DataTable/DataTable"; // Import reusable table
import useWebTitle from "../../../../hooks/useWebTitle";
import { permissions } from "../../../../datas/DataPermissions"; // Import permissions data

// Define column structure
const columns = [
  {
    key: "id",
    label: "#",
    G768: true,
    L768: true,
    L650: true,
    L550: true,
    L450: true,
    sortable: true,
  },
  {
    key: "permission",
    label: "Permission Name",
    G768: true,
    L768: true,
    L650: true,
    L550: true,
    L450: true,
    sortable: true,
  },
  {
    key: "updated",
    label: "Updated Date",
    G768: true,
    L768: false,
    L650: false,
    L550: false,
    L450: false,
    sortable: true,
  },
  {
    key: "user_id",
    label: "User ID",
    G768: true,
    L768: true,
    L650: false,
    L550: false,
    L450: false,
    sortable: true,
  },
  {
    key: "description",
    label: "Description",
    G768: false,
    L768: false,
    L650: false,
    L550: false,
    L450: false,
    sortable: false,
  },
];

const DevPermission = () => {
  useWebTitle("Permissions");
  return (
    <div>
      <h2>Permissions</h2>
      <Datatable columns={columns} data={permissions} />
    </div>
  );
};

export default DevPermission;
