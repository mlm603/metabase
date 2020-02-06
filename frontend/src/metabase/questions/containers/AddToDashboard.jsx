import React, { Component } from "react";
import { t } from "ttag";
import { Flex } from "grid-styled";

import * as Urls from "metabase/lib/urls";
import Icon from "metabase/components/Icon";
import ModalContent from "metabase/components/ModalContent";
import QuestionPicker from "metabase/containers/QuestionPicker";
import Link from "metabase/components/Link";

export default class AddToDashboard extends Component {
  render() {
    return (
      <ModalContent
        title={t`Pick a question to add`}
        onClose={this.props.onClose}
      >
        <QuestionPicker onChange={this.props.onAdd} />
        <Link
          mt={1}
          to={Urls.newQuestionFlow()}
          onClick={() => this.setState({ shouldCreateDashboard: true })}
        >
          <Flex align="center" className="text-brand" py={2}>
            <Icon name="add" mx={1} bordered />
            <h4>{t`Create a new question`}</h4>
          </Flex>
        </Link>
      </ModalContent>
    );
  }
}
