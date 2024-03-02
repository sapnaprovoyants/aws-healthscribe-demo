// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import TextContent from '@cloudscape-design/components/text-content';

import { useAuthContext } from '@/store/auth';

function Welcome() {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    function Content() {
        if (user) {
            return (
                <TextContent>
                  <p>Thank you for taking the time to explore our demo application.</p>
                  <p> Your feedback is invaluable to us as we strive to create a solution that reduces documentation burden for clinicians.</p>
                  <p>To use this application, please log in using the credentials provided to you by our team. For this demo, navigate to the new patient screen and provide a patient name. Click on live recording.</p>
                  <p>We look forward to hearing your thoughts and insights.</p>
                </TextContent>
            );
        } else {
            return <Alert>Log in for full functionality.</Alert>;
        }
    }

    function Footer() {
        return (
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright @2024. All Rights Reserved.</p>
            </Box>
        );
    }

    return (
        <ContentLayout header={<Header variant="h2">Demo Application</Header>}>
            <Container footer={<Footer />}>
                <Content />
            </Container>
        </ContentLayout>
    );
}

export default memo(Welcome);
