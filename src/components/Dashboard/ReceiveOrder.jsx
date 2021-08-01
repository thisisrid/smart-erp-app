import { makeStyles, TableBody } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/delete.svg";

import {
  AddItemContainer,
  ApplyFormInput,
  Button,
  Error,
  InputDiv,
  Label,
  MainTitle,
  Select,
  SubmitButton,
  TableContainer,
  TableInput,
  TableSelect,
} from "../../styles/styles";
const useStyles = makeStyles({
  table: {
    width: "100%",
    paddingTop: "30px",
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

const ReceiveOrder = () => {
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
    <AddItemContainer className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row className="w-100 p-0 m-0">
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Order No.</Label>
                <ApplyFormInput
                  placeholder=""
                  type="text"
                  {...register("order_no", { required: true })}
                />
                {errors.order_no && <Error>Order number is required</Error>}
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Date Received</Label>
                <ApplyFormInput
                  placeholder=""
                  type="date"
                  {...register("received_date", {
                    required: true,
                  })}
                />
                {errors.received_date && (
                  <Error>Receive date is required</Error>
                )}
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Agency Name</Label>
                <ApplyFormInput
                  type="text"
                  placeholder=""
                  {...register("agency", {
                    required: true,
                  })}
                />
                {errors.agency && <Error>Email is required</Error>}
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Generated by</Label>
                <ApplyFormInput
                  type="text"
                  placeholder=""
                  {...register("generated_by", {
                    required: true,
                  })}
                />
                {errors.generated_by && <Error>Input is invalid</Error>}
              </InputDiv>
            </Col>
          </Row>
          <section>
            <MainTitle>Add Items</MainTitle>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.thead} align="center">
                      #
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      ITEM NAME
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      TOTAL Qty.
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      Received
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      Good Condition
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      Bad Condition
                    </TableCell>
                    <TableCell className={classes.thead} align="center">
                      Not Working
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
                          <TableSelect {...register(`item${i}`)}>
                            <option value="IP Camera">IP Camera</option>
                            <option value="aa">A</option>
                            <option value="bb">B</option>
                            <option value="cc">C</option>
                          </TableSelect>
                        </TableCell>
                        <TableCell align="center">
                          <TableInput
                            type="number"
                            defaultValue=""
                            {...register(`total_qty${i}`, { required: true })}
                          />
                        </TableCell>

                        <TableCell align="center">
                          <TableInput
                            type="number"
                            defaultValue=""
                            {...register(`received${i}`, { required: true })}
                          ></TableInput>
                        </TableCell>
                        <TableCell align="center">
                          <TableInput
                            type="number"
                            defaultValue=""
                            {...register(`good_condition${i}`, {
                              required: true,
                            })}
                          ></TableInput>
                        </TableCell>
                        <TableCell align="center">
                          <TableInput
                            type="number"
                            defaultValue=""
                            {...register(`bad_condition${i}`, {
                              required: true,
                            })}
                          ></TableInput>
                        </TableCell>
                        <TableCell align="center">
                          <TableInput
                            type="number"
                            defaultValue=""
                            {...register(`not_working${i}`, { required: true })}
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
            </TableContainer>
          </section>
          <div className="text-center mt-lg-5">
            <Button outline onClick={handleAddItem}>
              + Add Item
            </Button>
          </div>

          <MainTitle>Delivery Details</MainTitle>
          <Row className="w-100 p-0 m-0">
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Mode of Transport</Label>
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
                <Label>Courier/Flight No.</Label>
                <ApplyFormInput
                  type="text"
                  placeholder=""
                  {...register("courier_no", {
                    required: true,
                  })}
                />
                {errors.courier_no && <Error>This field is required</Error>}
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Received Location</Label>
                <ApplyFormInput
                  type="text"
                  placeholder=""
                  {...register("received_location", {
                    required: true,
                  })}
                />
                {errors.received_location && (
                  <Error>Receiver location is required</Error>
                )}
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Received by</Label>
                <ApplyFormInput
                  type="text"
                  placeholder=""
                  {...register("receiver_name", {
                    required: true,
                  })}
                />
                {errors.receiver_name && (
                  <Error>Receiver name is required</Error>
                )}
              </InputDiv>
            </Col>

            <Col md={9} xs={12}>
              <InputDiv>
                <Label>Remarks</Label>
                <ApplyFormInput
                  placeholder=""
                  type="text"
                  {...register("remarks")}
                />
              </InputDiv>
            </Col>
            <Col md={3} xs={12}>
              <InputDiv>
                <Label>Audit Status</Label>
                <Select {...register("audit_status")}>
                  <option value="Incomplete"> Incomplete </option>
                  <option value="Complete"> Complete </option>
                </Select>
              </InputDiv>
            </Col>
          </Row>
          <div className="text-center my-lg-5">
            <SubmitButton
              type="submit"
              value="Save"
              disabled={item.length ? "" : "disabled"}
            />
          </div>
        </Container>
      </form>
    </AddItemContainer>
  );
};

export default ReceiveOrder;
const Container = styled.div`
  padding: 0 50px;
  @media only screen and (max-width: 800px) {
    padding: 0 25px;
  }
`;
