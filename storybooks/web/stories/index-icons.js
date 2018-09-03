import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Add from 'binary-ui-icons/binary/Add';
import AddCard from 'binary-ui-icons/binary/AddCard';
import AddEmoji from 'binary-ui-icons/binary/AddEmoji';
import Announcements from 'binary-ui-icons/binary/Announcements';
import Apple from 'binary-ui-icons/binary/Apple';
import AppleAlt from 'binary-ui-icons/binary/AppleAlt';
import Approval from 'binary-ui-icons/binary/Approval';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import ArrowUp from 'binary-ui-icons/binary/ArrowUp';
import Autoconnect from 'binary-ui-icons/binary/Autoconnect';
import Behance from 'binary-ui-icons/binary/Behance';
import Beverage from 'binary-ui-icons/binary/Beverage';
import Call from 'binary-ui-icons/binary/Call';
import CallAlt from 'binary-ui-icons/binary/CallAlt';
import CalendarView from 'binary-ui-icons/binary/CalendarView';
import CameraAlt from 'binary-ui-icons/binary/CameraAlt';
import Cancel from 'binary-ui-icons/binary/Cancel';
import Card from 'binary-ui-icons/binary/Card';
import CardAlt from 'binary-ui-icons/binary/CardAlt';
import CardBroken from 'binary-ui-icons/binary/CardBroken';
import Cards from 'binary-ui-icons/binary/Cards';
import CardsAlt from 'binary-ui-icons/binary/CardsAlt';
import Check from 'binary-ui-icons/binary/Check';
import CheckAlt from 'binary-ui-icons/binary/CheckAlt';
import Circle from 'binary-ui-icons/binary/Circle';
import Copy from 'binary-ui-icons/binary/Copy';
import Delete from 'binary-ui-icons/binary/Delete';
import DeleteCharacter from 'binary-ui-icons/binary/DeleteCharacter';
import DeleteAlt from 'binary-ui-icons/binary/DeleteAlt';
import Deleted from 'binary-ui-icons/binary/Deleted';
import DeletedAlt from 'binary-ui-icons/binary/DeletedAlt';
import Designer from 'binary-ui-icons/binary/Designer';
import Done from 'binary-ui-icons/binary/Done';
import Drawer from 'binary-ui-icons/binary/Drawer';
import Email from 'binary-ui-icons/binary/Email';
import Event from 'binary-ui-icons/binary/Event';
import EditAlt from 'binary-ui-icons/binary/EditAlt';
import Facebook from 'binary-ui-icons/binary/Facebook';
import Facetime from 'binary-ui-icons/binary/Facetime';
import FacetimeAlt from 'binary-ui-icons/binary/FacetimeAlt';
import Favorites from 'binary-ui-icons/binary/Favorites';
import FavoritesAlt from 'binary-ui-icons/binary/FavoritesAlt';
import FixedDesk from 'binary-ui-icons/binary/FixedDesk';
import Google from 'binary-ui-icons/binary/Google';
import Github from 'binary-ui-icons/binary/Github';
import HotDesk from 'binary-ui-icons/binary/HotDesk';
import Info from 'binary-ui-icons/binary/Info';
import InfoAlt from 'binary-ui-icons/binary/InfoAlt';
import Instagram from 'binary-ui-icons/binary/Instagram';
import InstagramAlt from 'binary-ui-icons/binary/InstagramAlt';
import KakaoPlus from 'binary-ui-icons/binary/KakaoPlus';
import Kakaotalk from 'binary-ui-icons/binary/Kakaotalk';
import Keypad from 'binary-ui-icons/binary/Keypad';
import KeypadAlt from 'binary-ui-icons/binary/KeypadAlt';
import Kitchen from 'binary-ui-icons/binary/Kitchen';
import Like from 'binary-ui-icons/binary/Like';
import Linkedin from 'binary-ui-icons/binary/Linkedin';
import LinkedinAlt from 'binary-ui-icons/binary/LinkedinAlt';
import List from 'binary-ui-icons/binary/List';
import ListView from 'binary-ui-icons/binary/ListView';
import Location from 'binary-ui-icons/binary/Location';
import LocationAlt from 'binary-ui-icons/binary/LocationAlt';
import Locked from 'binary-ui-icons/binary/Locked';
import LockedAlt from 'binary-ui-icons/binary/LockedAlt';
import Locker from 'binary-ui-icons/binary/Locker';
import Logout from 'binary-ui-icons/binary/Logout';
import Medium from 'binary-ui-icons/binary/Medium';
import MeetingRoom from 'binary-ui-icons/binary/MeetingRoom';
import Microsoft from 'binary-ui-icons/binary/Microsoft';
import Minus from 'binary-ui-icons/binary/Minus';
import MinusAlt from 'binary-ui-icons/binary/MinusAlt';
import More from 'binary-ui-icons/binary/More';
import MoreAlt from 'binary-ui-icons/binary/MoreAlt';
import Naver from 'binary-ui-icons/binary/Naver';
import New from 'binary-ui-icons/binary/New';
import NewAlt from 'binary-ui-icons/binary/NewAlt';
import Notices from 'binary-ui-icons/binary/Notices';
import Open from 'binary-ui-icons/binary/Open';
import Organization from 'binary-ui-icons/binary/Organization';
import OrganizationDisconnected from 'binary-ui-icons/binary/OrganizationDisconnected';
import Parking from 'binary-ui-icons/binary/Parking';
import Pass from 'binary-ui-icons/binary/Pass';
import Photos from 'binary-ui-icons/binary/Photos';
import PhoneCard from 'binary-ui-icons/binary/PhoneCard';
import Pinned from 'binary-ui-icons/binary/Pinned';
import Pinterest from 'binary-ui-icons/binary/Pinterest';
import Printer from 'binary-ui-icons/binary/Printer';
import QuestionAlt from 'binary-ui-icons/binary/QuestionAlt';
import Redhat from 'binary-ui-icons/binary/Redhat';
import ResetSetting from 'binary-ui-icons/binary/ResetSetting';
import Remove from 'binary-ui-icons/binary/Remove';
import RoomBooking from 'binary-ui-icons/binary/RoomBooking';
import RotateLeft from 'binary-ui-icons/binary/RotateLeft';
import RotateRight from 'binary-ui-icons/binary/RotateRight';
import RoundTheClock from 'binary-ui-icons/binary/RoundTheClock';
import Save from 'binary-ui-icons/binary/Save';
import Scan from 'binary-ui-icons/binary/Scan';
import ScanAlt from 'binary-ui-icons/binary/ScanAlt';
import Search from 'binary-ui-icons/binary/Search';
import Send from 'binary-ui-icons/binary/Send';
import SendAlt from 'binary-ui-icons/binary/SendAlt';
import Settings from 'binary-ui-icons/binary/Settings';
import SettingsAlt from 'binary-ui-icons/binary/SettingsAlt';
import Share from 'binary-ui-icons/binary/Share';
import ShareAlt from 'binary-ui-icons/binary/ShareAlt';
import Skype from 'binary-ui-icons/binary/Skype';
import SmartLock from 'binary-ui-icons/binary/SmartLock';
import Stack from 'binary-ui-icons/binary/Stack';
import StackFull from 'binary-ui-icons/binary/StackFull';
import StackNew from 'binary-ui-icons/binary/StackNew';
import StackUnavailable from 'binary-ui-icons/binary/StackUnavailable';
import StackUnavailableAlt from 'binary-ui-icons/binary/StackUnavailableAlt';
import Statistics from 'binary-ui-icons/binary/Statistics';
import Store from 'binary-ui-icons/binary/Store';
import StoreAlt from 'binary-ui-icons/binary/StoreAlt';
import Subscribe from 'binary-ui-icons/binary/Subscribe';
import Switch from 'binary-ui-icons/binary/Switch';
import Telegram from 'binary-ui-icons/binary/Telegram';
import Text from 'binary-ui-icons/binary/Text';
import TextAlt from 'binary-ui-icons/binary/TextAlt';
import Time from 'binary-ui-icons/binary/Time';
import Translation from 'binary-ui-icons/binary/Translation';
import Triangle from 'binary-ui-icons/binary/Triangle';
import Twitter from 'binary-ui-icons/binary/Twitter';
import Ubuntu from 'binary-ui-icons/binary/Ubuntu';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import Update from 'binary-ui-icons/binary/Update';
import User from 'binary-ui-icons/binary/User';
import UserAlt from 'binary-ui-icons/binary/UserAlt';
import UserInvite from 'binary-ui-icons/binary/UserInvite';
import Viber from 'binary-ui-icons/binary/Viber';
import Warning from 'binary-ui-icons/binary/Warning';
import Whatsapp from 'binary-ui-icons/binary/Whatsapp';
import WhatsappAlt from 'binary-ui-icons/binary/WhatsappAlt';
import World from 'binary-ui-icons/binary/World';
import Yahoo from 'binary-ui-icons/binary/Yahoo';
import Youtube from 'binary-ui-icons/binary/Youtube';
import React from 'react';
import styled from 'styled-components';

setAddon(infoAddon);

const COLOR = '#000000';
const SIZE = 50;

const AddStyled = styled(Add)`
  background-color: #FFFF00;
`;

storiesOf('binary-ui-icons/binary', module)
  .add('General', (() => (
    <div style={{ display: 'grid', fontFamily: 'sans-serif', fontSize: 10, textAlign: 'center', gridGap: 30, gridTemplateColumns: 'repeat(auto-fit, 50px)' }}>
      <div><Add color={COLOR} size={SIZE} />Add</div>
      <div><AddCard color={COLOR} size={SIZE} />AddCard</div>
      <div><AddEmoji color={COLOR} size={SIZE} />AddEmoji</div>
      <div><Announcements color={COLOR} size={SIZE} />Announcements</div>
      <div><ArrowDown color={COLOR} size={SIZE} />ArrowDown</div>
      <div><ArrowLeft color={COLOR} size={SIZE} />ArrowLeft</div>
      <div><ArrowRight color={COLOR} size={SIZE} />ArrowRight</div>
      <div><ArrowUp color={COLOR} size={SIZE} />ArrowUp</div>
      <div><Approval color={COLOR} size={SIZE} />Approval</div>
      <div><Autoconnect color={COLOR} size={SIZE} />Autoconnect</div>
      <div><Beverage color={COLOR} size={SIZE} />Beverage</div>
      <div><Call color={COLOR} size={SIZE} />Call</div>
      <div><CallAlt color={COLOR} size={SIZE} />CallAlt</div>
      <div><CalendarView color={COLOR} size={SIZE} />CalendarView</div>
      <div><CameraAlt color={COLOR} size={SIZE} />CameraAlt</div>
      <div><Cancel color={COLOR} size={SIZE} />Cancel</div>
      <div><Card color={COLOR} size={SIZE} />Card</div>
      <div><CardAlt color={COLOR} size={SIZE} />CardAlt</div>
      <div><CardBroken color={COLOR} size={SIZE} />CardBroken</div>
      <div><Check color={COLOR} size={SIZE} />Check</div>
      <div><CheckAlt color={COLOR} size={SIZE} />CheckAlt</div>
      <div><Circle color={COLOR} size={SIZE} />Circle</div>
      <div><Copy color={COLOR} size={SIZE} />Copy</div>
      <div><Delete color={COLOR} size={SIZE} />Delete</div>
      <div><DeleteCharacter color={COLOR} size={SIZE} />DeleteCharacter</div>
      <div><DeleteAlt color={COLOR} size={SIZE} />DeleteAlt</div>
      <div><Deleted color={COLOR} size={SIZE} />Deleted</div>
      <div><DeletedAlt color={COLOR} size={SIZE} />DeletedAlt</div>
      <div><Done color={COLOR} size={SIZE} />Done</div>
      <div><Drawer color={COLOR} size={SIZE} />Drawer</div>
      <div><EditAlt color={COLOR} size={SIZE} />EditAlt</div>
      <div><Email color={COLOR} size={SIZE} />Email</div>
      <div><Event color={COLOR} size={SIZE} />Event</div>
      <div><Favorites color={COLOR} size={SIZE} />Favorites</div>
      <div><FavoritesAlt color={COLOR} size={SIZE} />FavoritesAlt</div>
      <div><FixedDesk color={COLOR} size={SIZE} />FixedDesk</div>
      <div><HotDesk color={COLOR} size={SIZE} />HotDesk</div>
      <div><Info color={COLOR} size={SIZE} />Info</div>
      <div><InfoAlt color={COLOR} size={SIZE} />InfoAlt</div>
      <div><Keypad color={COLOR} size={SIZE} />Keypad</div>
      <div><KeypadAlt color={COLOR} size={SIZE} />KeypadAlt</div>
      <div><Kitchen color={COLOR} size={SIZE} />Kitchen</div>
      <div><Like color={COLOR} size={SIZE} />Like</div>
      <div><List color={COLOR} size={SIZE} />List</div>
      <div><ListView color={COLOR} size={SIZE} />ListView</div>
      <div><Location color={COLOR} size={SIZE} />Location</div>
      <div><LocationAlt color={COLOR} size={SIZE} />LocationAlt</div>
      <div><Locked color={COLOR} size={SIZE} />Locked</div>
      <div><LockedAlt color={COLOR} size={SIZE} />LockedAlt</div>
      <div><Locker color={COLOR} size={SIZE} />Locker</div>
      <div><Logout color={COLOR} size={SIZE} />Logout</div>
      <div><MeetingRoom color={COLOR} size={SIZE} />MeetingRoom</div>
      <div><Minus color={COLOR} size={SIZE} />Minus</div>
      <div><MinusAlt color={COLOR} size={SIZE} />MinusAlt</div>
      <div><More color={COLOR} size={SIZE} />More</div>
      <div><MoreAlt color={COLOR} size={SIZE} />MoreAlt</div>
      <div><New color={COLOR} size={SIZE} />New</div>
      <div><NewAlt color={COLOR} size={SIZE} />NewAlt</div>
      <div><Notices color={COLOR} size={SIZE} />Notices</div>
      <div><Open color={COLOR} size={SIZE} />Open</div>
      <div><Organization color={COLOR} size={SIZE} />Organization</div>
      <div><OrganizationDisconnected color={COLOR} size={SIZE} />OrganizationDisconnected</div>
      <div><Parking color={COLOR} size={SIZE} />Parking</div>
      <div><Pass color={COLOR} size={SIZE} />Pass</div>
      <div><Photos color={COLOR} size={SIZE} />Photos</div>
      <div><Pinned color={COLOR} size={SIZE} />Pinned</div>
      <div><Printer color={COLOR} size={SIZE} />Printer</div>
      <div><QuestionAlt color={COLOR} size={SIZE} />QuestionAlt</div>
      <div><Remove color={COLOR} size={SIZE} />Remove</div>
      <div><ResetSetting color={COLOR} size={SIZE} />ResetSetting</div>
      <div><RoomBooking color={COLOR} size={SIZE} />RoomBooking</div>
      <div><RotateLeft color={COLOR} size={SIZE} />RotateLeft</div>
      <div><RotateRight color={COLOR} size={SIZE} />RotateRight</div>
      <div><RoundTheClock color={COLOR} size={SIZE} />RoundTheClock</div>
      <div><Save color={COLOR} size={SIZE} />Save</div>
      <div><Scan color={COLOR} size={SIZE} />Scan</div>
      <div><ScanAlt color={COLOR} size={SIZE} />ScanAlt</div>
      <div><Search color={COLOR} size={SIZE} />Search</div>
      <div><Send color={COLOR} size={SIZE} />Send</div>
      <div><SendAlt color={COLOR} size={SIZE} />SendAlt</div>
      <div><Settings color={COLOR} size={SIZE} />Settings</div>
      <div><SettingsAlt color={COLOR} size={SIZE} />SettingsAlt</div>
      <div><Share color={COLOR} size={SIZE} />Share</div>
      <div><ShareAlt color={COLOR} size={SIZE} />ShareAlt</div>
      <div><SmartLock color={COLOR} size={SIZE} />SmartLock</div>
      <div><Stack color={COLOR} size={SIZE} />Stack</div>
      <div><StackFull color={COLOR} size={SIZE} />StackFull</div>
      <div><StackNew color={COLOR} size={SIZE} />StackNew</div>
      <div><StackUnavailable color={COLOR} size={SIZE} />StackUnavailable</div>
      <div><StackUnavailableAlt color={COLOR} size={SIZE} />StackUnavailableAlt</div>
      <div><Statistics color={COLOR} size={SIZE} />Statistics</div>
      <div><Store color={COLOR} size={SIZE} />Store</div>
      <div><StoreAlt color={COLOR} size={SIZE} />StoreAlt</div>
      <div><Subscribe color={COLOR} size={SIZE} />Subscribe</div>
      <div><Switch color={COLOR} size={SIZE} />Switch</div>
      <div><PhoneCard color={COLOR} size={SIZE} />PhoneCard</div>
      <div><Text color={COLOR} size={SIZE} />Text</div>
      <div><TextAlt color={COLOR} size={SIZE} />TextAlt</div>
      <div><Time color={COLOR} size={SIZE} />Time</div>
      <div><Translation color={COLOR} size={SIZE} />Translation</div>
      <div><Triangle color={COLOR} size={SIZE} />Triangle</div>
      <div><Uncheck color={COLOR} size={SIZE} />Uncheck</div>
      <div><Update color={COLOR} size={SIZE} />Update</div>
      <div><User color={COLOR} size={SIZE} />User</div>
      <div><UserAlt color={COLOR} size={SIZE} />UserAlt</div>
      <div><UserInvite color={COLOR} size={SIZE} />UserInvite</div>
      <div><Warning color={COLOR} size={SIZE} />Warning</div>
      <div><World color={COLOR} size={SIZE} />World</div>
    </div>
  )))
  .add('Logotypes', withInfo('')(() => (
    <div style={{ display: 'grid', fontFamily: 'sans-serif', fontSize: 10, textAlign: 'center', gridGap: 30, gridTemplateColumns: 'repeat(auto-fit, 50px)' }}>
      <div><Apple color={COLOR} size={SIZE} />Apple</div>
      <div><AppleAlt color={COLOR} size={SIZE} />AppleAlt</div>
      <div><Behance color={COLOR} size={SIZE} />Behance</div>
      <div><Cards color={COLOR} size={SIZE} />Cards</div>
      <div><CardsAlt color={COLOR} size={SIZE} />CardsAlt</div>
      <div><Designer color={COLOR} size={SIZE} />Designer</div>
      <div><Facebook color={COLOR} size={SIZE} />Facebook</div>
      <div><Facetime color={COLOR} size={SIZE} />Facetime</div>
      <div><FacetimeAlt color={COLOR} size={SIZE} />FacetimeAlt</div>
      <div><Google color={COLOR} size={SIZE} />Google</div>
      <div><Github color={COLOR} size={SIZE} />Github</div>
      <div><Instagram color={COLOR} size={SIZE} />Instagram</div>
      <div><InstagramAlt color={COLOR} size={SIZE} />InstagramAlt</div>
      <div><KakaoPlus color={COLOR} size={SIZE} />KakaoPlus</div>
      <div><Kakaotalk color={COLOR} size={SIZE} />KakaoTalk</div>
      <div><Linkedin color={COLOR} size={SIZE} />Linkedin</div>
      <div><LinkedinAlt color={COLOR} size={SIZE} />LinkedinAlt</div>
      <div><Medium color={COLOR} size={SIZE} />Medium</div>
      <div><Microsoft color={COLOR} size={SIZE} />Microsoft</div>
      <div><Naver color={COLOR} size={SIZE} />Naver</div>
      <div><Pinterest color={COLOR} size={SIZE} />Pinterest</div>
      <div><Redhat color={COLOR} size={SIZE} />Redhat</div>
      <div><Skype color={COLOR} size={SIZE} />Skype</div>
      <div><Telegram color={COLOR} size={SIZE} />Telegram</div>
      <div><Twitter color={COLOR} size={SIZE} />Twitter</div>
      <div><Ubuntu color={COLOR} size={SIZE} />Ubuntu</div>
      <div><Viber color={COLOR} size={SIZE} />Viber</div>
      <div><Whatsapp color={COLOR} size={SIZE} />Whatsapp</div>
      <div><WhatsappAlt color={COLOR} size={SIZE} />WhatsappAlt</div>
      <div><Yahoo color={COLOR} size={SIZE} />Yahoo</div>
      <div><Youtube color={COLOR} size={SIZE} />Youtube</div>
    </div>
  )))
  .add('Styled', withInfo('')(() => (
    <div style={{ display: 'grid', fontFamily: 'sans-serif', fontSize: 10, textAlign: 'center', gridGap: 30, gridTemplateColumns: 'repeat(auto-fit, 50px)' }}>
      <div><AddStyled color='#C40333' size={SIZE} />Color</div>
      <div><AddStyled color={COLOR} size={SIZE} onMouseDown={action()} />Action</div>
    </div>
  )));
