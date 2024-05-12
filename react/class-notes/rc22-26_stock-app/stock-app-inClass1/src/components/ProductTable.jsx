import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"

export default function ProductTable() {
  const { deleteStock } = useStockRequest()
  const { products } = useSelector((state) => state.stock)

  const getRowId = (row) => row._id

  const columns = [
    { field: "_id", headerName: "#", minWidth: 150, flex: 1.4 },
    {
      field: "categoryId",
      headerName: "Categories",
      flex: 1,
      minWidth: 100,
      valueGetter: (value, row) => row.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      headerAlign: "center",
      align: "center",
      width: 150,
      flex: 1.2,
      editable: true,
      valueGetter: (value, row) => row.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      miWidth: 110,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            onClick={() => deleteStock("products", props.id)}
            label="Delete"
          />,
        ]
      },
    },
  ]

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  )
}
