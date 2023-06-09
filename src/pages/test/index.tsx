import Head from 'next/head';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import {
  IoAlertCircleOutline,
  IoCheckmarkDoneCircleOutline,
  IoInformationCircleOutline,
  IoRocket,
  IoSearch,
  IoWarningOutline,
} from 'react-icons/io5';

import { App } from '~@types/_app';

import { useToast } from '~@lib/context/toast.context';

import { Clear } from '~@layouts';

import Typography from '~@components/Typography';
import TextField from '~@components/TextField';
import Button from '~@components/Button';

const colors: App.TThemeColors[] = ['primary', 'secondary'];
// const statuses: ThemeStatus[] = ['success', 'info', 'warning', 'error'];
const variants: App.TTextVariants[] = ['display', 'heading', 'title', 'body', 'label'];
const sizes: App.TSizes[] = ['large', 'medium', 'small'];

const Card = ({
  children,
  title,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => {
  return (
    <section className="p-4">
      <Typography variant="heading" component="h2" size="large">
        {title}
      </Typography>
      <div className={clsx('grid grid-cols-12 gap-4', className)}>{children}</div>
    </section>
  );
};

const CardContent = ({
  children,
  color = 'primary',
  className = '',
}: {
  children: React.ReactNode;
  color?: App.TThemeColors;
  className?: string;
}) => {
  const bColor = `border-${color}`;
  return (
    <div className={clsx('col-span-6 rounded-xl border-2 p-2', bColor, className)}>{children}</div>
  );
};

const Test: App.TNextPageWithLayout = () => {
  const { addToast } = useToast();
  const [toastTitle, setToastTitle] = useState('');

  const handleToastClick = (status: App.TStatus) => {
    addToast({ type: status, title: toastTitle, description: `Teste ${status} toast` });
  };

  const handleToastTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToastTitle(e.currentTarget.value);
  };

  return (
    <>
      <Head>
        <title>Test Components</title>
      </Head>
      <div className="min-h-full w-full">
        <Card title="Toast">
          <CardContent className="col-start-4 flex flex-wrap justify-center">
            <TextField
              id="toastTitle"
              type="text"
              name="toastTitle"
              value={toastTitle}
              placeholder="Toast Title"
              onChange={handleToastTitleChange}
              fullWidth
            />
            <Button
              type="button"
              variant="contained"
              icon={IoInformationCircleOutline}
              onClick={() => handleToastClick('success')}
            >
              Success
            </Button>
            <Button
              type="button"
              variant="contained"
              icon={IoWarningOutline}
              onClick={() => handleToastClick('info')}
            >
              Info
            </Button>
            <Button
              type="button"
              variant="contained"
              icon={IoAlertCircleOutline}
              onClick={() => handleToastClick('warning')}
            >
              Warning
            </Button>
            <Button
              type="button"
              variant="contained"
              icon={IoCheckmarkDoneCircleOutline}
              onClick={() => handleToastClick('error')}
            >
              Error
            </Button>
          </CardContent>
        </Card>
        <Card title="Typography">
          <CardContent className="col-start-4">
            {variants.map(variant =>
              sizes.map(size => (
                <Typography
                  key={`${variant}-${size}`}
                  variant={variant}
                  component="span"
                  size={size}
                  className="capitalize"
                >
                  {`${variant} ${size}`}
                </Typography>
              )),
            )}
          </CardContent>
        </Card>
        <Card title="TextField">
          {colors.map(color => (
            <CardContent key={`text-${color}`} color={color}>
              <Typography variant="title" component="h3" size="medium">
                {color}
              </Typography>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Normal
                </Typography>
                <TextField
                  id={color}
                  name={color}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                />
                <TextField
                  id={`${color}-val`}
                  name={`${color}-val`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                />
                <TextField
                  id={`${color}-disabled`}
                  name={`${color}-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  disabled
                />
                <TextField
                  id={`${color}-val-disabled`}
                  name={`${color}-val-disabled`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  disabled
                />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Icon
                </Typography>
                <TextField
                  id={`${color}-icon`}
                  name={`${color}-icon`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                />
                <TextField
                  id={`${color}-val-icon`}
                  name={`${color}-val-icon`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                />
                <TextField
                  id={`${color}-icon-disabled`}
                  name={`${color}-icon-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  disabled
                />
                <TextField
                  id={`${color}-val-icon-disabled`}
                  name={`${color}-val-icon-disabled`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  disabled
                />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Action Button
                </Typography>
                <TextField
                  id={`${color}-actionButton`}
                  name={`${color}-actionButton`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-actionButton`}
                  name={`${color}-val-actionButton`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-actionButton-disabled`}
                  name={`${color}-actionButton-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  iconActionButton={IoSearch}
                  disabled
                />
                <TextField
                  id={`${color}-val-actionButton-disabled`}
                  name={`${color}-val-actionButton-disabled`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  iconActionButton={IoSearch}
                  disabled
                />
                <TextField
                  id={`${color}-icon-actionButton`}
                  name={`${color}-icon-actionButton`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-icon-actionButton`}
                  name={`${color}-val-icon-actionButton`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-icon-actionButton-disabled`}
                  name={`${color}-icon-actionButton-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  iconActionButton={IoSearch}
                  disabled
                />
                <TextField
                  id={`${color}-val-icon-actionButton-disabled`}
                  name={`${color}-val-icon-actionButton-disabled`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  icon={IoRocket}
                  iconActionButton={IoSearch}
                  disabled
                />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  FullWidth
                </Typography>
                <TextField
                  id={`${color}-fullWidth`}
                  name={`${color}-fullWidth`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                />
                <TextField
                  id={`${color}-fullWidth`}
                  name={`${color}-fullWidth`}
                  value={color}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                />
                <TextField
                  id={`${color}-icon-fullWidth`}
                  name={`${color}-icon-fullWidth`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  icon={IoRocket}
                />
                <TextField
                  id={`${color}-val-icon-fullWidth`}
                  name={`${color}-val-icon-fullWidth`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  icon={IoRocket}
                />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  FullWidth Disabled
                </Typography>
                <TextField
                  id={`${color}-val-fullWidth-disabled`}
                  name={`${color}-val-fullWidth-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  disabled
                />
                <TextField
                  id={`${color}-val-fullWidth-disabled`}
                  name={`${color}-val-fullWidth-disabled`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  disabled
                />
                <TextField
                  id={`${color}-icon-fullWidth-disabled`}
                  name={`${color}-icon-fullWidth-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  icon={IoRocket}
                  disabled
                />
                <TextField
                  id={`${color}-val-icon-fullWidth-disabled`}
                  name={`${color}-val-icon-fullWidth-disabled`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  icon={IoRocket}
                  disabled
                />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  FullWidth Action Button
                </Typography>
                <TextField
                  id={`${color}-val-fullWidth-actionButton`}
                  name={`${color}-val-fullWidth-actionButton`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-fullWidth-actionButton`}
                  name={`${color}-val-fullWidth-actionButton`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-fullWidth-actionButton`}
                  name={`${color}-val-fullWidth-actionButton`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  icon={IoRocket}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-fullWidth-actionButton`}
                  name={`${color}-val-fullWidth-actionButton`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  icon={IoRocket}
                  value={color}
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-icon-fullWidth-disabled`}
                  name={`${color}-icon-fullWidth-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  disabled
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-icon-fullWidth-disabled`}
                  name={`${color}-val-icon-fullWidth-disabled`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  disabled
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-icon-fullWidth-disabled`}
                  name={`${color}-icon-fullWidth-disabled`}
                  value=""
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  icon={IoRocket}
                  disabled
                  iconActionButton={IoSearch}
                />
                <TextField
                  id={`${color}-val-icon-fullWidth-disabled`}
                  name={`${color}-val-icon-fullWidth-disabled`}
                  placeholder={color}
                  type="text"
                  color={color}
                  fullWidth
                  value={color}
                  icon={IoRocket}
                  disabled
                  iconActionButton={IoSearch}
                />
              </div>
            </CardContent>
          ))}
        </Card>
        <Card title="Button">
          {colors.map(color => (
            <CardContent key={color} color={color}>
              <Typography variant="title" component="h3" size="medium" color={color}>
                {color}
              </Typography>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Icon
                </Typography>
                <Button type="button" color={color} variant="text" icon={IoRocket} />
                <Button type="button" color={color} variant="outlined" icon={IoRocket} />
                <Button type="button" color={color} variant="contained" icon={IoRocket} />
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Text
                </Typography>
                <Button type="button" color={color} variant="text">
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined">
                  Login
                </Button>
                <Button type="button" color={color} variant="contained">
                  Login
                </Button>
                <Button type="button" color={color} variant="text" icon={IoRocket}>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" icon={IoRocket}>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" icon={IoRocket}>
                  Login
                </Button>
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  Disabled
                </Typography>
                <Button type="button" color={color} variant="text" icon={IoRocket} disabled />
                <Button type="button" color={color} variant="outlined" icon={IoRocket} disabled />
                <Button type="button" color={color} variant="contained" icon={IoRocket} disabled />
                <Button type="button" color={color} variant="text" disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="text" icon={IoRocket} disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" icon={IoRocket} disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" icon={IoRocket} disabled>
                  Login
                </Button>
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  FullWidth
                </Typography>
                <Button type="button" color={color} variant="text" fullWidth>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" fullWidth>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" fullWidth>
                  Login
                </Button>
                <Typography variant="title" component="h4" size="small">
                  FullWidth Disabled
                </Typography>
                <Button type="button" color={color} variant="text" fullWidth disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" fullWidth disabled>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" fullWidth disabled>
                  Login
                </Button>
              </div>
              <div>
                <Typography variant="title" component="h4" size="small">
                  FullWidth Icon
                </Typography>
                <Button type="button" color={color} variant="text" fullWidth icon={IoRocket}>
                  Login
                </Button>
                <Button type="button" color={color} variant="outlined" fullWidth icon={IoRocket}>
                  Login
                </Button>
                <Button type="button" color={color} variant="contained" fullWidth icon={IoRocket}>
                  Login
                </Button>
                <Typography variant="title" component="h4" size="small">
                  FullWidth Icon Disabled
                </Typography>
                <Button
                  type="button"
                  color={color}
                  variant="text"
                  fullWidth
                  icon={IoRocket}
                  disabled
                >
                  Login
                </Button>
                <Button
                  type="button"
                  color={color}
                  variant="outlined"
                  fullWidth
                  icon={IoRocket}
                  disabled
                >
                  Login
                </Button>
                <Button
                  type="button"
                  color={color}
                  variant="contained"
                  fullWidth
                  icon={IoRocket}
                  disabled
                >
                  Login
                </Button>
              </div>
            </CardContent>
          ))}
        </Card>
      </div>
    </>
  );
};

export default Test;
Test.getLayout = (page: ReactNode) => {
  return <Clear>{page}</Clear>;
};
