import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const location = useLocation();

  const addValue = (count: number) => {
    const event = new CustomEvent('addValue', { detail: count });
    window.dispatchEvent(event);
  }

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => {
        var sum = count + 1;
        setCount(sum);
        addValue(sum);
      }}>Click me</Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to container
        </Button>
      )}
    </Flex>
  );
};

export default Counter;
