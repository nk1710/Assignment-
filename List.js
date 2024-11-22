import React, { useEffect, useState } from "react";
import { fetchUsers, createUser  } from "../api";
import UserForm from "./User Form";

const UserList = () => {
  const [