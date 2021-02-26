import React, { Component } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import Company from "../../../components/Company";
import Footer from "../../../components/Footer";
import Institution from "../../../components/Institution";
import Navbar from "../../../components/NavBar";
import { mainCompanies, otherCompanies } from "../../../data/companies";
import { institutions } from "../../../data/institutions";
import picture from "../../../img/sam-picture.jpg";
import {
  CVPicture,
  MainCompanyCollapse,
  MainDiv,
  MainH1,
  MainH2,
  MainH3,
  MainLine,
  MainParagraph,
} from "../../../styles/Main";

class CurriculumView extends Component {
  state = {
    showCompanies: false,
  };

  handleShowCompanies = () =>
    this.setState({ showCompanies: !this.state.showCompanies });

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainDiv>
          <Breadcrumbs name={"Curriculum"} />

          <MainH1>Curriculum</MainH1>

          <MainH2>Personal Data</MainH2>
          <MainLine />
          <CVPicture src={picture} alt="Sam Barros Picture" />

          <MainH3>Name:</MainH3>
          <MainParagraph>Sam Barros</MainParagraph>

          <MainH3>Position:</MainH3>
          <MainParagraph>Senior Software Engineer</MainParagraph>

          <MainH3>Residence:</MainH3>
          <MainParagraph>Berlin, Germany</MainParagraph>

          <MainH3>Languages:</MainH3>

          <MainParagraph>Portuguese - Native</MainParagraph>
          <MainParagraph>English - Advanced</MainParagraph>
          <MainParagraph>French - Intermediate</MainParagraph>
          <MainParagraph>Spanish - Basic</MainParagraph>

          <MainH2>About me</MainH2>
          <MainLine />

          <MainParagraph>
            My name is Samarony Barros, but you can call me Sam. I'm a Senior
            Software Developer with more than 10 years of experience. I've
            started my professional career as a Ruby developer intern, but now
            my experience is more related to NodeJS, ReactJS, JavaScript,
            Typescript, Express, and Postgres. And, of course, as someone who
            frequently works with MERN Technology, I'm also a big MongoDB fan.
          </MainParagraph>

          <MainParagraph>
            At this moment, I'm working for a scale-up, Keleya, where I'm in
            charge of reengineering and optimizing our product. I'm leading
            different projects, working on the full development lifecycle, which
            includes designing, coding, unit testing, and debugging the backend,
            besides doing some database management. As we don't have a big
            development team, I'm used to using agile methodologies to deliver
            releases according to what was planned during the sprint.
          </MainParagraph>

          <MainParagraph>
            As a senior member of the team, I'm focused on mentoring and
            collaborating with Junior Developers and other teammates, increasing
            product quality and gaining traction. I'm also in touch with other
            departments, ensuring we're all on the same page regarding
            priorities and future planning.
          </MainParagraph>

          <MainParagraph>
            In my entrepreneurial career, I had the opportunity to manage
            projects and different kinds of teams, leading Developers,
            Consultants, and Designers. As an Entrepreneur, I turned myself into
            a multidisciplinary and committed professional with the ability to
            adapt to new situations.
          </MainParagraph>

          <MainParagraph>
            During my career, I've worked for a multinational company, scale-ups
            and I have had my own business, creating software that has
            contributed to the success and growth of their businesses, besides
            supporting them on the decision-making process that is based on real
            data not only empirical data. Because of that, I'm well versed in
            solving complex problems and using user feedback to improve the
            product, not only from the technical side but also from a user
            experience perspective.
          </MainParagraph>

          <MainParagraph>
            I'm very passionate about software development, team leadership, and
            project management. The entrepreneurial experience turned me into a
            determined person with the ability to adapt to new situations. I'm
            always learning and sharing my knowledge with others.
          </MainParagraph>

          <MainParagraph>
            If you think that I could add value to your network, add me as a
            contact. You can also find me at samarony.barros@gmail.com and
            http://sambarros.com
          </MainParagraph>

          <MainH2>Work Experience</MainH2>
          <MainLine />

          {mainCompanies.map((company, index) => (
            <Company
              key={index}
              image={company.image}
              role={company.role}
              companyName={company.companyName}
              period={company.period}
              city={company.city}
              activities={company.activities}
            />
          ))}

          {this.state.showCompanies && (
            <MainCompanyCollapse>
              {otherCompanies.map((company, index) => (
                <Company
                  key={index}
                  image={company.image}
                  role={company.role}
                  companyName={company.companyName}
                  period={company.period}
                  city={company.city}
                  activities={company.activities}
                />
              ))}
            </MainCompanyCollapse>
          )}

          <Button onClick={this.handleShowCompanies}>
            {`Show ${
              this.state.showCompanies ? `less companies ⤒` : `more companies ⤓`
            }`}
          </Button>

          <MainH2>Education</MainH2>
          <MainLine />

          {institutions.map((institution, index) => (
            <Institution
              key={index}
              image={institution.image}
              course={institution.course}
              institutionName={institution.institutionName}
              period={institution.period}
              city={institution.city}
            />
          ))}

          <MainH2>Technical Skills</MainH2>
          <MainLine />

          <MainH3>7+ years:</MainH3>
          <MainParagraph>
            Java, PHP, Scrum, MS SQL, Oracle, MySql, and PostgreSQL.
          </MainParagraph>
          <MainH3>6+ years:</MainH3>
          <MainParagraph>
            JavaScript, NodeJS, ReactJS, MongoDB, Sequelize, and Bootstrap.
          </MainParagraph>
          <MainH3>4+ years:</MainH3>
          <MainParagraph>C, C++, Shell Script and Git.</MainParagraph>
          <MainH3>2+ years:</MainH3>
          <MainParagraph>Typescript, Android, Ruby, Objective-C.</MainParagraph>
        </MainDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CurriculumView;
