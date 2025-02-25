// import React from "react";
import Datatable from "../../../../components/admin/widgets/DataTable/DataTable"; // Import reusable table
import useWebTitle from "../../../../hooks/useWebTitle";

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
    key: "name",
    label: "Permission Name",
    G768: true,
    L768: true,
    L650: true,
    L550: true,
    L450: true,
    sortable: true,
  },
  {
    key: "created",
    label: "Created",
    G768: true,
    L768: false,
    L650: false,
    L550: false,
    L450: false,
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
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

// Sample data
const data = [
  {
    id: 1,
    name: "Admin Access",
    created: "2024-02-20",
    status: "Active",
    description: "Full access to system",
  },
  {
    id: 2,
    name: "Editor Access",
    created: "2024-02-18",
    status: "Inactive",
    description: "Can edit content",
  },
  {
    id: 3,
    name: "Viewer Access",
    created: "2024-02-15",
    status: "Active",
    description: "Can only view content",
  },
];

const DevPermission = () => {
  useWebTitle("Permisisons");
  return (
    <div>
      <h2>Permissions</h2>
      <Datatable columns={columns} data={data} />
    </div>
  );
};

export default DevPermission;
