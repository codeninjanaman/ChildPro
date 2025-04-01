import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Select, TimePicker, Button, Checkbox, message } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const times = Array.from({ length: 19 }, (_, i) =>
  dayjs().hour(i + 6).minute(0).format('h A')
);

interface Session {
  day: string;
  startTime: string;
  endTime: string;
  fee: string;
  feeType: 'Hourly' | 'Full Day';
  description: string;
}

interface Props {
  isEditable: boolean;
  toggleEdit?: () => void;
}

const ArrangementOfCare: React.FC<Props> = ({ isEditable }) => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [newSession, setNewSession] = useState<Partial<Session>>({});

  useEffect(() => {
    const backendSessions: Session[] = [
      {
        day: 'Mon',
        startTime: '08:00',
        endTime: '18:00',
        fee: '12',
        feeType: 'Hourly',
        description: 'Routine',
      },
      {
        day: 'Tue',
        startTime: '08:00',
        endTime: '18:00',
        fee: '12',
        feeType: 'Hourly',
        description: 'Routine',
      },
    ];
    setSessions(backendSessions);
  }, []);

  const addSession = () => {
    if (!newSession.day || !newSession.startTime || !newSession.endTime || !newSession.fee || !newSession.description || !newSession.feeType) {
      message.error('Please fill all fields');
      return;
    }

    const hours = dayjs(newSession.endTime, 'HH:mm').diff(dayjs(newSession.startTime, 'HH:mm'), 'hour');
    const totalFee = newSession.feeType === 'Hourly' ? (parseFloat(newSession.fee) * hours).toFixed(2) : (parseFloat(newSession.fee) * 1).toFixed(2);

    setSessions([...sessions, { ...newSession, fee: totalFee } as Session]);
    setNewSession({});
  };

  const deleteSession = (index: number) => {
    const updated = [...sessions];
    updated.splice(index, 1);
    setSessions(updated);
  };

  return (
    <div style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontWeight: 600 }}>Session Type*</div>
        
      </div>

      <Input value="Routine & Casual" disabled style={{ marginBottom: 24 }} />

      {/* Graph */}
      <div style={{ marginBottom: 12 }}>
        {weekdays.map((day) => (
          <div key={day} style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ width: 40 }}>{day}</div>
            <div style={{ flex: 1, display: 'flex', height: 20 }}>
              {times.map((_t, i) => {
                const session = sessions.find(s => s.day === day);
                const hour = i + 6;
                const filled =
                  session &&
                  hour >= dayjs(session.startTime, 'HH:mm').hour() &&
                  hour < dayjs(session.endTime, 'HH:mm').hour();
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      backgroundColor: filled ? 'green' : '#eee',
                      marginLeft: i === 0 ? 0 : 1,
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 12, marginTop: 4 }}>
          {times.map((t, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>{t}</div>
          ))}
        </div>
      </div>

      <Checkbox style={{ marginBottom: 24 }} disabled={!isEditable}>
        Does Week 2 differ from Week 1 (fortnight cycle)?
      </Checkbox>

      <div style={{ fontWeight: 600, marginBottom: 12 }}>Add Session</div>
      <Row gutter={16}>
        <Col span={4}>
          <Select
            placeholder="Day"
            style={{ width: '100%' }}
            value={newSession.day}
            onChange={(val) => setNewSession({ ...newSession, day: val })}
            disabled={!isEditable}
          >
            {weekdays.map((day) => (
              <Option key={day} value={day}>{day}</Option>
            ))}
          </Select>
        </Col>
        <Col span={4}>
          <TimePicker
            format="HH:mm"
            value={newSession.startTime ? dayjs(newSession.startTime, 'HH:mm') : undefined}
            onChange={(val) => setNewSession({ ...newSession, startTime: val?.format('HH:mm') })}
            style={{ width: '100%' }}
            disabled={!isEditable}
          />
        </Col>
        <Col span={4}>
          <TimePicker
            format="HH:mm"
            value={newSession.endTime ? dayjs(newSession.endTime, 'HH:mm') : undefined}
            onChange={(val) => setNewSession({ ...newSession, endTime: val?.format('HH:mm') })}
            style={{ width: '100%' }}
            disabled={!isEditable}
          />
        </Col>
        <Col span={3}>
          <Input
            placeholder="$ Fee"
            value={newSession.fee}
            onChange={(e) => setNewSession({ ...newSession, fee: e.target.value })}
            disabled={!isEditable}
          />
        </Col>
        <Col span={3}>
          <Select
            value={newSession.feeType}
            onChange={(val) => setNewSession({ ...newSession, feeType: val })}
            style={{ width: '100%' }}
            disabled={!isEditable}
          >
            <Option value="Hourly">Hourly</Option>
            <Option value="Full Day">Full Day</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Input
            placeholder="Session Description"
            value={newSession.description}
            onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
            disabled={!isEditable}
          />
        </Col>
        <Col span={2}>
          <Button icon={<PlusOutlined />} type="primary" onClick={addSession} disabled={!isEditable} />
        </Col>
      </Row>

      <div style={{ marginTop: 32 }}>
        {sessions.map((session, index) => (
          <Row key={index} gutter={16} style={{ marginBottom: 12, alignItems: 'center' }}>
            <Col span={4}><b>{session.day}</b></Col>
            <Col span={4}>Start: {session.startTime}</Col>
            <Col span={4}>End: {session.endTime}</Col>
            <Col span={3}>Fee: ${session.fee}</Col>
            <Col span={3}>Type: {session.feeType}</Col>
            <Col span={4}>Desc: {session.description}</Col>
            <Col span={2}>
              <Button danger icon={<DeleteOutlined />} onClick={() => deleteSession(index)} disabled={!isEditable} />
            </Col>
          </Row>
        ))}
      </div>

      
    </div>
  );
};

export default ArrangementOfCare;
