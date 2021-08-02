import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  AddItemContainer,
  ApplyFormInput,
  BoldText,
  Button,
  Error,
  InputDiv,
  Label,
  MainTitle,
  Select,
  SubmitButton,
  SubText,
  TableInput,
  TopBar,
} from "../../styles/styles";
import { ReactComponent as IndiaIcon } from "../../Assets/Icons/india.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/delete.svg";
import {
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "80%",
    paddingTop: "30px",
    margin: "0 auto",
  },
  thead: {
    borderBottom: "none",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#6D83AE",
    background: "#F7F9FD",
  },
  button: {
    display: "block",
    marginTop: "20px",
  },
  formControl: {
    margin: "10px",
    minWidth: 120,
  },
});

const GenerateOutwards = ({ date, setShow }) => {
  const classes = useStyles();
  const [countItem, setCountItem] = useState(0);
  const [item, setItem] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAddItem = () => {
    let count = parseInt(countItem) + 1;
    setCountItem(count);
    setItem([...item, count]);
  };
  const handleDelete = (id) => {
    const remainItem = item.filter((i) => i !== id);
    if (remainItem.length) {
      setItem(remainItem);
      setCountItem(remainItem);
    } else {
      setItem(remainItem);
      setCountItem(0);
    }
  };
  return (
    <div>
      <TopBar className="mb-4">
        <BoldText>Generate Outward</BoldText>
        <div>
          <SubText> Today, {date} </SubText>
          <Button outline onClick={() => setShow("outwards")}>
            View Outwards
          </Button>
        </div>
      </TopBar>
      <AddItemContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <MainTitle>Agency Details</MainTitle>
            <Row className="w-100 p-0 m-0">
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Agency Name</Label>
                  <ApplyFormInput
                    placeholder=""
                    type="text"
                    {...register("agency", { required: true })}
                  />
                  {errors.date && <Error>Agency name is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Receiver's Name</Label>
                  <ApplyFormInput
                    placeholder=""
                    {...register("receiver", {
                      required: true,
                    })}
                  />
                  {errors.supplier && (
                    <Error>Receiver's name is required</Error>
                  )}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Phone Number</Label>
                  <InputGroup className="">
                    <InputIcon id="basic-addon1" className="bg-white">
                      <IndiaIcon />
                    </InputIcon>
                    <ApplyFormInput
                      style={{ width: "100%", height: "98%", border: "none" }}
                      placeholder=""
                      aria-label="phone_number"
                      {...register("phone_number", {
                        required: true,
                      })}
                    />
                  </InputGroup>
                  {errors.received_date && (
                    <Error>Received date number is required</Error>
                  )}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Email</Label>
                  <ApplyFormInput
                    type="email"
                    placeholder=""
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && <Error>Email is required</Error>}
                </InputDiv>
              </Col>
            </Row>

            <MainTitle>Order Details</MainTitle>
            <Row className="w-100 p-0 m-0">
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Order Generated by</Label>
                  <ApplyFormInput
                    placeholder=""
                    type="text"
                    {...register("generated_by", { required: true })}
                  />
                  {errors.generated_by && <Error>Input is empty</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Reference Number</Label>
                  <ApplyFormInput
                    placeholder=""
                    type="number"
                    {...register("reference", {
                      required: true,
                    })}
                  />
                  {errors.supplier && <Error>Reference is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>P.O Number</Label>
                  <ApplyFormInput
                    type="number"
                    placeholder=""
                    {...register("po_number", {
                      required: true,
                    })}
                  />
                  {errors.po_number && <Error>P.O number is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>P.I Number</Label>
                  <ApplyFormInput
                    type="number"
                    placeholder=""
                    {...register("PI_number", {
                      required: true,
                    })}
                  />
                  {errors.PI_number && <Error>P.I number is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Eway Bill</Label>
                  <ApplyFormInput
                    type="text"
                    placeholder=""
                    {...register("eway_bill", {
                      required: true,
                    })}
                  />
                  {errors.eway_bill && (
                    <Error>Eway bill number is required</Error>
                  )}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>D.C Number</Label>
                  <ApplyFormInput
                    type="number"
                    placeholder=""
                    {...register("dc_number", {
                      required: true,
                    })}
                  />
                  {errors.dc_number && <Error>D.C number is required</Error>}
                </InputDiv>
              </Col>
            </Row>
            <MainTitle>Delivery Details</MainTitle>
            <Row className="w-100 p-0 m-0">
              <Col md={6} xs={12}>
                <InputDiv>
                  <Label>Address</Label>
                  <ApplyFormInput
                    placeholder=""
                    type="text"
                    {...register("address", { required: true })}
                  />
                  {errors.date && <Error>Address is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>City</Label>
                  <ApplyFormInput
                    placeholder=""
                    {...register("city", {
                      required: true,
                    })}
                  />
                  {errors.city && <Error>City is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>District</Label>
                  <ApplyFormInput
                    type="text"
                    placeholder=""
                    {...register("district", {
                      required: true,
                    })}
                  />
                  {errors.district && <Error>District name is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>State</Label>
                  <ApplyFormInput
                    type="text"
                    placeholder=""
                    {...register("state", {
                      required: true,
                    })}
                  />
                  {errors.state && <Error>State is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Pincode</Label>
                  <ApplyFormInput
                    type="number"
                    placeholder=""
                    {...register("pincode", {
                      required: true,
                    })}
                  />
                  {errors.received_date && <Error>Pincode is required</Error>}
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Mode of Transportation</Label>

                  <Select {...register("Transport")}>
                    <option value=" "> </option>
                    <option value="aa">A</option>
                    <option value="bb">B</option>
                    <option value="cc">C</option>
                  </Select>
                </InputDiv>
              </Col>
              <Col md={3} xs={12}>
                <InputDiv>
                  <Label>Delivery Date</Label>
                  <ApplyFormInput
                    type="date"
                    placeholder=""
                    {...register("delivery_date", {
                      required: true,
                    })}
                  />
                  {errors.delivery_date && (
                    <Error>Delivery date is required</Error>
                  )}
                </InputDiv>
              </Col>
              <Col md={12} xs={12}>
                <InputDiv>
                  <Label>Remarks</Label>
                  <ApplyFormInput
                    type="text"
                    placeholder=""
                    {...register("remarkd")}
                  />
                </InputDiv>
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <SubmitButton type="submit" value="submit" className="d-none" />
            </div>
          </Container>
        </form>
        <AddItemsContainer>
          <Container>
            <MainTitle>Add Items</MainTitle>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.thead} align="center">
                    #
                  </TableCell>
                  <TableCell className={classes.thead} align="center">
                    ITEM CODE
                  </TableCell>
                  <TableCell className={classes.thead} align="center">
                    ITEM
                  </TableCell>
                  <TableCell className={classes.thead} align="center">
                    TOTAL Qty.
                  </TableCell>
                  <TableCell
                    className={classes.thead}
                    align="center"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.map((number, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell align="center">
                        {number < 10 ? `0${number}` : number}
                      </TableCell>
                      <TableCell align="center">
                        {Math.floor(Math.random() + Math.random() * 10000)}
                      </TableCell>
                      <TableCell align="center">
                        <select {...register("item")}>
                          <option value="IP Camera">IP Camera</option>
                          <option value="aa">A</option>
                          <option value="bb">B</option>
                          <option value="cc">C</option>
                        </select>
                      </TableCell>
                      <TableCell align="center">
                        <TableInput
                          type="number"
                          {...register(`total_qty`, { required: true })}
                        ></TableInput>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => handleDelete(number)}
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Container>
        </AddItemsContainer>
        <div className="text-center mt-lg-5">
          <Button outline onClick={handleAddItem}>
            + Add Item
          </Button>
        </div>
        <div className="text-center my-lg-5">
          <SubmitButton
            type="submit"
            value="Generate Order"
            disabled={item.length ? "" : "disabled"}
          />
        </div>
      </AddItemContainer>
    </div>
  );
};

export default GenerateOutwards;
const AddItemsContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    overflow-x: scroll;
  }
`;
const Container = styled.div`
  padding: 0 50px;
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  width: 100%;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
  height: 45px;
  padding: 0;
`;
const InputIcon = styled.span`
border-right: 1px solid #8e8e8e;
padding: 0;
height: 100%;
display: flex;
align-items: center;
padding: .375rem 0.75rem;
margin-left: 4px
`;
