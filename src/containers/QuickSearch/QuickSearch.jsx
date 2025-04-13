import React from 'react';
import Container from '../Container';

const QuickSearch = () => {
  return (
    <section id="quick-search-container" className="mb-16 hidden py-8 md:block">
      <Container>
        <div className="flex flex-col items-start gap-8 text-black">
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase">Top việc làm cho Fresher</h4>
            <p className="extra-small">
              Việc làm Fresher Java / Việc làm Fresher Javascript / Việc làm
              Fresher PHP / Việc làm Fresher Python / Việc làm Fresher ReactJS /
              Việc làm Fresher NodeJS / Việc làm Fresher C/C++ / Việc làm
              Fresher Tester / Việc làm Fresher Frontend / Việc làm Fresher
              Backend
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase">Việc làm theo ngành nghề</h4>
            <p className="extra-small">
              Việc làm IT ngành Outsourcing / Việc làm IT ngành Product / Việc
              làm IT ngành Ngân hàng / Việc làm IT ngành Viễn thông / Việc làm
              IT ngành Game / Giải trí / Việc làm IT ngành Fintech / Việc làm IT
              ngành Phần cứng / Việc làm IT ngành Phần mềm / Việc làm IT ngành
              Quảng cáo truyền thông / Việc làm IT ngành Dịch vụ IT
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4 className="subheading uppercase">
              Công ty hot theo ngành nghề
            </h4>
            <p className="extra-small">
              Công ty Outsourcing / Công ty ngành Phần Mềm / Công ty ngành Phần
              cứng / Công ty ngành Product / Công ty ngành Ngân hàng / Công ty
              ngành Viễn thông / Công ty ngành Game / Giải trí / Công ty ngành
              Quảng Cáo Truyền Thông / Công ty ngành Dịch vụ IT / Công ty ngành
              Fintech
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuickSearch;
