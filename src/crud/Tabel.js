import React from "react";
import { Button, Table } from "react-bootstrap";

const Tabel = ({makanan, editData, hapusData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp.{makanan.harga}</td>
              <td className="d-grid gap-2 d-md-block">
                <Button variant="warning" onClick={() => editData(makanan.id)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => hapusData(makanan.id)}>Hapus</Button>{' '}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
