import React from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

class Crud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  // Arrow Function
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Arrow Function
  handleSubmit = (event) => {
    // preventDefault berfungsi ketika sudah mengisi semua -
    // dan mengklik tombol submit, maka tidak akan otomatis reload
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananSelainDipilih = this.state.makanan
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

        console.log(makananSelainDipilih)

      this.setState({
        makanan: [
          ...makananSelainDipilih,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });

    // console.log("Data : ", this.state);
  };

  editData = (id) => {
    const makananDipilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: makananDipilih[0].nama,
      deskripsi: makananDipilih[0].deskripsi,
      harga: makananDipilih[0].harga,
      id: makananDipilih[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanan
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
        // return console.log(filterMakanan)
      });

      console.log(makananBaru)
    this.setState({
      makanan: makananBaru,
    });
  };

  render() {
    // console.log(this.state.makanan);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel
            makanan={this.state.makanan}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Crud;
