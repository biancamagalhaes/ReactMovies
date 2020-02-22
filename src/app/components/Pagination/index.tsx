import React from "react";
import { Pagination as ComponentPagination } from "../Circle/Circle";
import { Container, NumberPage } from "./style";

interface PaginationProps {
  value: number;
  valuePerPage: number;
  actualPage: number;
  onClick: (page: number) => any;
}

export default function Pagination(props: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.value / props.valuePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map((element: number, indx) => (
        <div onClick={() => props.onClick(element)} key={indx}>
          {props.actualPage == element ? (
            <ComponentPagination number={element} />
          ) : indx === 10 && element < pageNumbers.length ? (
            <NumberPage>...</NumberPage>
          ) : (
            <NumberPage>{element}</NumberPage>
          )}
        </div>
      ))}
    </Container>
  );
}
