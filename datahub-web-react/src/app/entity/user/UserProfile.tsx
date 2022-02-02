import { Alert, Col, Row, Divider, Space, Button, Tag } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EditOutlined, MailOutlined, PhoneOutlined, SlackOutlined } from '@ant-design/icons';
import useUserParams from '../../shared/entitySearch/routingUtils/useUserParams';
import { useGetUserQuery } from '../../../graphql/user.generated';
import { useGetAllEntitySearchResults } from '../../../utils/customGraphQL/useGetAllEntitySearchResults';
import { Message } from '../../shared/Message';
import { EntityRelationshipsResult } from '../../../types.generated';
import UserGroups from './UserGroups';
import { RoutedTabs } from '../../shared/RoutedTabs';
import { UserAssets } from './UserAssets';
import UserEditProfileModal from './UserEditProfileModal';
import { ExtendedEntityRelationshipsResult } from './type';
import CustomAvatar from '../../shared/avatar/CustomAvatar';

const messageStyle = { marginTop: '10%' };
export interface Props {
    onTabChange: (selectedTab: string) => void;
}

export enum TabType {
    Assets = 'Assets',
    Ownership = 'Ownership',
    Groups = 'Groups',
}
const ENABLED_TAB_TYPES = [TabType.Assets, TabType.Ownership, TabType.Groups];

const GROUP_PAGE_SIZE = 20;
const UserProfileWrapper = styled.div`
    // padding: 0 20px;
    &&& .ant-tabs-nav {
        margin: 0;
    }
`;
const UserSidebar = styled.div`
    padding: 25px 18px 0 17px;
    text-align: center;

    font-style: normal;
    font-weight: bold;
    height: calc(100vh - 60px);
    position: relative;

    &&& .ant-avatar.ant-avatar-icon {
        font-size: 46px !important;
    }
`;
const UserName = styled.div`
    font-size: 20px;
    line-height: 28px;
    color: #262626;
    margin: 13px 0 7px 0;
`;
const UserRole = styled.div`
    font-size: 14px;
    line-height: 22px;
    color: #595959;
    margin-bottom: 7px;
`;
const UserTeam = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #8c8c8c;
`;
const UserSocialDetails = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #262626;
    text-align: left;
    margin: 6px 0;
`;
const EditProfileButton = styled.div`
    // margin-bottom: 24px;
    bottom: 24px;
    position: absolute;
    right: 27px;
    width: 80%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);

    button {
        width: 100%;
        font-size: 12px;
        line-height: 20px;
        color: #262626;
    }
`;
const GroupsSection = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #262626;
`;
const TagsSection = styled.div`
    height: 130px;
    padding: 5px;
`;
const Tags = styled.div`
    margin-top: 5px;
`;
const GroupsSeeMoreText = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #1890ff;
    cursor: pointer;
`;
const Content = styled.div`
    color: #262626;
    height: calc(100vh - 60px);

    &&& .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
        padding-left: 15px;
    }
`;

/**
 * Responsible for reading & writing users.
 */
export default function UserProfile() {
    const { urn } = useUserParams();
    const { loading, error, data } = useGetUserQuery({ variables: { urn, groupsCount: GROUP_PAGE_SIZE } });
    const username = data?.corpUser?.username;
    const [editProfileModal, setEditProfileModal] = useState(false);
    const ownershipResult = useGetAllEntitySearchResults({
        query: `owners:${username}`,
    });
    const [groupSectionScroll, showGroupSectionScroll] = useState(false);
    const groupsDetails = data?.corpUser?.relationships as ExtendedEntityRelationshipsResult;
    const profileSrc = ''; // TODO: update the profileSrc from BE

    const contentLoading =
        Object.keys(ownershipResult).some((type) => {
            return ownershipResult[type].loading;
        }) || loading;

    if (error || (!loading && !error && !data)) {
        return <Alert type="error" message={error?.message || 'Entity failed to load'} />;
    }

    const groupMemberRelationships = data?.corpUser?.relationships as EntityRelationshipsResult;
    const getTabs = () => {
        return [
            {
                name: TabType.Assets,
                path: TabType.Assets.toLocaleLowerCase(),
                content: <UserAssets />,
            },
            {
                name: TabType.Groups,
                path: TabType.Groups.toLocaleLowerCase(),
                content: (
                    <UserGroups urn={urn} initialRelationships={groupMemberRelationships} pageSize={GROUP_PAGE_SIZE} />
                ),
            },
        ].filter((tab) => ENABLED_TAB_TYPES.includes(tab.name));
    };

    const defaultTabPath = getTabs() && getTabs()?.length > 0 ? getTabs()[0].path : '';
    const onTabChange = () => null;

    return (
        <>
            {contentLoading && <Message type="loading" content="Loading..." style={messageStyle} />}
            <UserProfileWrapper>
                <Row>
                    <Col xl={5} lg={5} md={5} sm={24} xs={24}>
                        <UserSidebar>
                            <CustomAvatar
                                size={160}
                                photoUrl={profileSrc || undefined}
                                name={data?.corpUser?.info?.fullName || undefined}
                            />
                            <UserName>{data?.corpUser?.info?.fullName}</UserName>
                            <UserRole>{data?.corpUser?.info?.title}</UserRole>
                            <UserTeam>Data Team</UserTeam>
                            <Divider style={{ margin: '18px 0px 22px 0' }} />
                            <UserSocialDetails>
                                <Space>
                                    <MailOutlined /> {data?.corpUser?.info?.email}
                                </Space>
                            </UserSocialDetails>
                            <UserSocialDetails>
                                <Space>
                                    <SlackOutlined /> {` slack`}
                                </Space>
                            </UserSocialDetails>
                            <UserSocialDetails>
                                <Space>
                                    <PhoneOutlined /> {` 928129129`}
                                </Space>
                            </UserSocialDetails>
                            <Divider style={{ margin: '23px 0px 15px 0' }} />
                            <GroupsSection>
                                Groups
                                <TagsSection style={{ overflow: groupSectionScroll ? 'auto' : 'hidden' }}>
                                    {!groupSectionScroll &&
                                        groupsDetails?.relationships.slice(0, 3).map((item) => {
                                            return (
                                                <Tags>
                                                    <Tag>{item.entity.name}</Tag>
                                                </Tags>
                                            );
                                        })}
                                    {groupSectionScroll &&
                                        groupsDetails?.relationships.length > 2 &&
                                        groupsDetails?.relationships.map((item) => {
                                            return (
                                                <Tags>
                                                    <Tag>{item.entity.name}</Tag>
                                                </Tags>
                                            );
                                        })}
                                    {!groupSectionScroll && groupsDetails?.relationships.length > 2 && (
                                        <GroupsSeeMoreText onClick={() => showGroupSectionScroll(!groupSectionScroll)}>
                                            {`+${groupsDetails?.relationships.length - 3} more`}
                                        </GroupsSeeMoreText>
                                    )}
                                </TagsSection>
                            </GroupsSection>
                            <EditProfileButton>
                                <Button icon={<EditOutlined />} onClick={() => setEditProfileModal(true)}>
                                    Edit Profile
                                </Button>
                            </EditProfileButton>
                        </UserSidebar>
                    </Col>
                    <Col xl={19} lg={19} md={19} sm={24} xs={24} style={{ borderLeft: '1px solid #E9E9E9' }}>
                        <Content>
                            <RoutedTabs defaultPath={defaultTabPath} tabs={getTabs()} onTabChange={onTabChange} />
                        </Content>
                    </Col>
                </Row>
                {/* Modal */}
                <UserEditProfileModal
                    visible={editProfileModal}
                    onClose={() => setEditProfileModal(false)}
                    onCreate={() => {
                        // Hack to deal with eventual consistency.
                        console.log('getModalData');
                    }}
                />
            </UserProfileWrapper>
        </>
    );
}
