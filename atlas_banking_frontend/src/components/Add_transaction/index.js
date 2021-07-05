import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";

function Transactions() {

  const initialAccountState = {
    nom: "",
    prenom: "",
    adresse: "",
    rib: "",
    solde: 0,
    telephone: "",
  };
  const [Account, setAccount] = useState(initialAccountState);
  useEffect(() => {
    async function afficheAccount() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/Accounts/3");
      setAccount(data);
    }
    afficheAccount();
  }, []);
  function handleAccountChange(e) {
    const { name, value } = e.target;
    setAccount({ ...Account, [name]: value });
    console.log(Account);
  }

  function submitAccount() {
    var  MontantTransfert= document.getElementById("in").value;
    let form_data = new FormData();
    form_data.append("nom", Account.nom);
    form_data.append("prenom", Account.prenom);
    form_data.append("adresse", Account.adresse);
    form_data.append("rib", Account.rib);
    form_data.append("solde",Account.solde-MontantTransfert);
    form_data.append("telephone", Account.telephone);
    console.log(form_data);
    async function putAccount() {
      await axios.put("http://127.0.0.1:8000/api/Accounts/3", form_data);
    }
    putAccount();
  }

  return (
    <Form onSubmit={submitAccount}>
     
      <Form.Group controlId="solde">
        <Form.Label>solde </Form.Label>
        <Form.Control
          type="number"
          name="solde"
          value={Account.solde}
          onChange={handleAccountChange}
          placeholder="Entrer le solde"
        ></Form.Control>
      </Form.Group>
      <input type="number" placeholder="Entrez le montant de transfert" id="in"/>
      <Button type="submit" variant="primary">
        Ajouter
      </Button>
    </Form>
  );
}

export default Transactions;
