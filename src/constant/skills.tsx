import React from 'react';
import {
  ReactIcon,
  SpringIcon,
  SpringBootIcon,
  PythonIcon,
  PyTorchIcon,
  DjangoIcon,
  FlaskIcon,
  FlutterIcon,
  MysqlIcon,
  PostgreSqlIcon,
  OracleIcon,
  GradleIcon,
  MongoDbIcon,
} from '../components/atoms/Icon';

import {skillsListType} from '../types/skills';

export const SKILL_LIST: skillsListType[] = [
  {
    name: 'react.js',
    value: 'REACT',
    renderIcon: () => <ReactIcon />,
  },
  {
    name: 'spring',
    value: 'SPRING',
    renderIcon: () => <SpringIcon />,
  },
  {
    name: 'spring-boot',
    value: 'SPRING_BOOT',
    renderIcon: () => <SpringBootIcon />,
  },
  {
    name: 'python',
    value: 'PYTHON',
    renderIcon: () => <PythonIcon />,
  },
  {
    name: 'pytorch',
    value: 'PYTORCH',
    renderIcon: () => <PyTorchIcon />,
  },
  {
    name: 'django',
    value: 'DJANGO',
    renderIcon: () => <DjangoIcon />,
  },
  {
    name: 'flask',
    value: 'FLASK',
    renderIcon: () => <FlaskIcon />,
  },
  {
    name: 'flutter',
    value: 'FLUTTER',
    renderIcon: () => <FlutterIcon />,
  },
  {
    name: 'mysql',
    value: 'MYSQL',
    renderIcon: () => <MysqlIcon />,
  },
  {
    name: 'python',
    value: 'PYTHON',
    renderIcon: () => <PythonIcon />,
  },
  {
    name: 'postgresql',
    value: 'POSTGRESQL',
    renderIcon: () => <PostgreSqlIcon />,
  },
  {
    name: 'oracle',
    value: 'ORACLE',
    renderIcon: () => <OracleIcon />,
  },
  {
    name: 'gradle',
    value: 'GRADLE',
    renderIcon: () => <GradleIcon />,
  },
  {
    name: 'mongodb',
    value: 'MONGODB',
    renderIcon: () => <MongoDbIcon />,
  },
];
