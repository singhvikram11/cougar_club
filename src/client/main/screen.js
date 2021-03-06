import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
} from "@ombiel/aek-lib";


export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>My New Screen</BannerHeader>
          <BasicSegment>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>Sed posuere consectetur est at lobortis.</p>
          </BasicSegment>
        </VBox>
      </Container>
    );

  }

}
