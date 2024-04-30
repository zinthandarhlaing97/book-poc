import { IBookData } from "@/types/book";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useState } from "react";
import Text from "../Text";
import { formatDate } from "@/utils/date.format.utils";
import Link from "next/link";

type BooksTableProps = {
  books: IBookData[];
};

const BooksTable: FC<BooksTableProps> = ({ books }) => {
  const columns: GridColDef<IBookData>[] = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "author",
      headerName: "Author",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "genre",
      headerName: "Genre",
      minWidth: 120,
      flex: 1,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 250,
      flex: 2,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "isbn",
      headerName: "ISBN",
      minWidth: 120,
      flex: 1,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "publisher",
      headerName: "Publisher",
      minWidth: 120,
      flex: 1,
      renderCell: (params) => <Text text={params.value || "-"} />,
    },
    {
      field: "published",
      headerName: "Published Date",
      minWidth: 120,
      renderCell: (params) => (
        <Text text={params.value ? formatDate(new Date(params.value)) : "-"} />
      ),
    },
    {
      field: "actions",
      headerName: "",
      minWidth: 120,
      align: "center",
      renderCell: (params) => (
        <Button LinkComponent={Link} href={`/book/${params.id}`}>
          View
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        "& .MuiDataGrid-root": {
          borderRadius: "0rem",
          borderTop: "none",
          borderBottom: "none",
          borderLeft: "none",
          borderRight: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
          fontWeight: 400,
          fontSize: 14,
        },
        "& .name-column--cell": {},
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "text.primary",
          align: "center",
          justifyContent: "center",
        },
        "& .MuiDataGrid-columnHeaders": {
          borderTop: `0.0625rem solid #eee`,
          borderBottom: `0.0625rem solid #eee`,
        },

        "& .MuiDataGrid-footerContainer": {
          borderTop: `0.0625rem solid #eee`,
          borderBottom: "none",
        },

        "& .MuiDataGrid-iconSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
          outline: "none !important",
          border: "none !important",
        },
      }}
    >
      <DataGrid
        paginationMode="server"
        checkboxSelection={false}
        autoHeight
        pagination
        rows={books ?? []}
        columns={columns}
        rowCount={books.length}
        disableRowSelectionOnClick
        getRowHeight={() => "auto"}
        density="compact"
        sx={{
          flex: "none",
          backgroundColor: "background.default",
          borderRadius: 1,
          overflow: "hidden",
          "& .MuiDataGrid-cell": {
            py: 0.75,
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
          "& .MuiDataGrid-columnHeader": {
            position: "relative",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontSize: 14,
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            overflow: "initial",
            position: "static",
          },
          "& .MuiDataGrid-columnHeader--emptyGroup": {
            borderBottom: "1px solid",
            borderColor: "divider",
          },
          "& .MuiDataGrid-virtualScroller": {
            flex: 1,
          },
        }}
      />
    </Box>
  );
};

export default BooksTable;
